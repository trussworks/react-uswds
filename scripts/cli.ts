/* eslint-disable @typescript-eslint/no-explicit-any */
import { Command, program } from '@commander-js/extra-typings'
import { InlineConfig, build } from 'vite'
import dts, { PluginOptions } from 'vite-plugin-dts'
import { glob } from 'glob'
import { renameSync, rmSync } from 'node:fs'
import { relative, extname, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(new URL(import.meta.url)))

const libSrcPath = join(__dirname, '../libSrc')

const input = Object.fromEntries([
  ...glob
    .sync(`${libSrcPath}/**/!(*.spec|*.stories|*.test).{ts,tsx}`)
    .map((file) => [
      // The name of the entry point
      // lib/nested/foo.ts becomes nested/foo
      relative(libSrcPath, file.slice(0, file.length - extname(file).length)),
      // The absolute path to the entry file
      // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
])

function fixCjsDeclarations(emittedFiles: Map<string, string>) {
  for (const [file] of emittedFiles) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    renameSync(file, file.replace('.d.ts', '.d.cts').replace('lib/cjs', 'lib/'))
  }
  rmSync('../lib/cjs', { recursive: true, force: true })
}

const buildCommand = new Command('build').action(async () => {
  const baseBuildConfig = {
    emptyOutDir: false,
    lib: { entry: input, formats: ['es'] },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'focus-trap-react',
        '@uswds/uswds',
      ],
      output: {
        assetFileNames: 'dist/assets/[name][extname]',
        entryFileNames: `[name].js`,
      },
    },
  } satisfies InlineConfig['build']

  const baseDtsConfig = {
    outDir: `./lib`,
    entryRoot: `./libSrc`,
    exclude: [
      'node_modules/**',
      'src/**',
      'libSrc/**/*.test.*',
      'libSrc/**/*.stories.*',
    ],
  } satisfies PluginOptions

  const cjsConfig = {
    build: structuredClone(baseBuildConfig),
    plugins: [
      dts({
        ...baseDtsConfig,
        afterBuild(emittedFiles) {
          fixCjsDeclarations(emittedFiles)
        },
      }),
    ],
  } satisfies InlineConfig
  cjsConfig.build.lib.formats = ['cjs'] as any
  ;(cjsConfig as any).build.emptyOutDir = true
  ;(cjsConfig as any).build.rollupOptions.output.entryFileNames = '[name].cjs'

  const esConfig = {
    build: structuredClone(baseBuildConfig),
    plugins: [
      dts({
        ...baseDtsConfig,
      }),
    ],
  } satisfies InlineConfig

  const bundleConfig = { build: structuredClone(baseBuildConfig) }
  ;(bundleConfig as any).build.outDir = 'lib/dist'
  ;(bundleConfig as any).build.lib = {
    entry: 'libSrc/index.ts',
    name: 'ReactUSWDS',
  }
  delete (bundleConfig as any).build.rollupOptions.output.entryFileNames
  // Support React Server Components
  // See: https://react.dev/reference/react/use-client
  ;(bundleConfig as any).build.rollupOptions.output.banner = (
    assetInfo: any
  ) =>
    assetInfo.fileName.endsWith('.js') || assetInfo.fileName.endsWith('.cjs')
      ? '"use client";'
      : ''

  // cjs
  await build(cjsConfig)

  // es
  await build(esConfig)

  // bundles
  await build(bundleConfig)
})

program.addCommand(buildCommand)

program.parse()
