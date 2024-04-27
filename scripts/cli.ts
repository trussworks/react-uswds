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

/**
 * Collect all non-test related modules to pass as inputs for export.
 */
const input = Object.fromEntries([
  ...glob
    .sync(`${libSrcPath}/**/!(*.spec|*.stories|*.test|fixtures).{ts,tsx}`)
    .map((file) => [
      // The name of the entry point
      // lib/nested/foo.ts becomes nested/foo
      relative(libSrcPath, file.slice(0, file.length - extname(file).length)),
      // The absolute path to the entry file
      // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
])

/**
 * Typescript declaration files for cjs exports need to have the `d.cts` extension
 * because this package is in `esm` mode and `cjs` modules (including typescript
 * declarations) must be explictly given a cjs-like extension. This function expects
 * that the files were emitted in the `lib/cjs` folder, and they will be moved/renamed
 * to sit alongside their modules. The `lib/cjs` folder will be removed after all files
 * are moved.
 */
function fixCjsDeclarations(emittedFiles: Map<string, string>) {
  for (const [file] of emittedFiles) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    renameSync(file, file.replace('.d.ts', '.d.cts').replace('lib/cjs', 'lib/'))
  }
  rmSync('../lib/cjs', { recursive: true, force: true })
}

/**
 * Create the following exports: cjs/es non-bundled, cjs/es bundled, and assets.
 * Final output should look similar to `libSrc` structure, with sets of both js/d.ts
 * and cjs/d.cts files for every module. A `dist` folder should exist with both cjs
 * and es versions of the library bundled. It should also contain an `assets` folder
 * containing all other files (ex: css).
 */
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
      'libSrc/**/fixtures.*',
    ],
  } satisfies PluginOptions

  // cjs non-bundled export
  const cjsConfig = {
    build: structuredClone(baseBuildConfig),
    plugins: [
      dts({
        ...baseDtsConfig,
        // Fix cjs declaration extensions after they're emitted
        afterBuild(emittedFiles) {
          fixCjsDeclarations(emittedFiles)
        },
      }),
    ],
  } satisfies InlineConfig
  cjsConfig.build.lib.formats = ['cjs'] as any
  ;(cjsConfig as any).build.rollupOptions.output.entryFileNames = '[name].cjs'
  // this is the first build action, so make sure outDir is cleared
  ;(cjsConfig as any).build.emptyOutDir = true

  // es non-bundled export
  const esConfig = {
    build: structuredClone(baseBuildConfig),
    plugins: [
      dts({
        ...baseDtsConfig,
      }),
    ],
  } satisfies InlineConfig

  // cjs (umd) and es bundled
  const bundleConfig = { build: structuredClone(baseBuildConfig) }
  ;(bundleConfig as any).build.outDir = 'lib/dist'
  ;(bundleConfig as any).build.lib = {
    entry: 'libSrc/index.ts',
    name: 'ReactUSWDS',
  }
  delete (bundleConfig as any).build.rollupOptions.output.entryFileNames
  // As a bundle the whole library must be considered client-only for react
  // See: https://react.dev/reference/react/use-client
  ;(bundleConfig as any).build.rollupOptions.output.banner = (
    assetInfo: any
  ) =>
    assetInfo.fileName.endsWith('.js') || assetInfo.fileName.endsWith('.cjs')
      ? '"use client";'
      : ''

  const configs = [cjsConfig, esConfig, bundleConfig]

  for (const [i, config] of configs.entries()) {
    // clean outDir before first build
    if (i === 0) {
      ;(config as any).build.emptyOutDir = true
    }

    await build(config)
  }
})

program.addCommand(buildCommand)

program.parse()
