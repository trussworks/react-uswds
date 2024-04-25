/// <reference types="vitest" />
import { resolve, relative, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import url from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import { checker } from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'
import { glob } from 'glob'
import { renameSync } from 'node:fs'
import pkg from 'typescript'
const { ModuleKind, ModuleResolutionKind } = pkg

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const uswdsIncludePaths = [
  'node_modules/@uswds',
  'node_modules/@uswds/uswds/packages',
]

const input = Object.fromEntries([
  //['index', 'lib/index.ts'],
  ...glob.sync('lib/**/!(*.spec|*.stories|*.test).{ts,tsx}').map((file) => [
    // The name of the entry point
    // lib/nested/foo.ts becomes nested/foo
    relative('lib', file.slice(0, file.length - extname(file).length)),
    // The absolute path to the entry file
    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
    fileURLToPath(new URL(file, import.meta.url)),
  ]),
])

const LIB_FORMAT = process.env.LIB_FORMAT ?? 'es'

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test' || mode === 'benchmark'
  const isCjs = LIB_FORMAT === 'cjs'

  return {
    // ignore some plugins if running tests
    plugins: [
      react(),
      !isTest &&
        checker({
          typescript: true,
        }),
      !isTest &&
        dts({
          //tsconfigPath: 'tsconfig.build.json',
          outDir: `dist/${isCjs ? 'cjs' : 'es'}`,
          insertTypesEntry: true,
          entryRoot: './lib',
          exclude: ['node_modules/**', 'src/**'],
          /*afterBuild(emittedFiles) {
            if (isCjs) {
              for (const [file] of emittedFiles) {
                // eslint-disable-next-line security/detect-non-literal-fs-filename
                renameSync(file, file.replace('.d.ts', '.d.cts'))
              }
            }
          },*/
          compilerOptions: isCjs
            ? {
                module: ModuleKind.CommonJS,
                moduleResolution: ModuleResolutionKind.Node16,
              }
            : {},
        }),
      // default svg url pattern is `*.svg?react`, updated to `*.svg?svgr`
      svgr({
        svgrOptions: { icon: true, memo: true },
        include: '**/*.svg?svgr',
      }),
    ],
    build: {
      emptyOutDir: !isCjs,
      lib: {
        entry: resolve(__dirname, 'lib/index.ts'),
        formats: [LIB_FORMAT],
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'focus-trap-react',
          '@uswds/uswds',
        ],
        input,
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: `[format]/[name].js`,
          exports: 'named',
        },
      },
      sourcemap: true,
      terserOptions: {
        compress: {
          // Preserve directives like "use client"
          directives: false,
        },
      },
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          includePaths: uswdsIncludePaths,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: 'uswds',
          replacement: resolve(__dirname, './node_modules/@uswds/uswds'),
        },
      ],
    },
    test: {
      globals: true,
      setupFiles: ['src/setupTests.ts'],
      environment: 'jsdom',
      coverage: {
        all: false,
        // same as jest default (labeled babel)
        provider: 'istanbul',
        thresholds: {
          global: {
            statements: 96,
            branches: 87,
            functions: 94,
            lines: 96,
          },
        },
      },
      css: false,
    },
  }
})
