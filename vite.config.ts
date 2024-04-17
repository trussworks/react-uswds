/// <reference types="vitest" />
import { resolve, dirname } from 'path'
import url from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { checker } from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'
import { glob } from 'glob'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const uswdsIncludePaths = [
  'node_modules/@uswds',
  'node_modules/@uswds/uswds/packages',
]

const entries = new Map<string, string>()
for (const file of glob.sync(
  'src/components/**/!(*.spec|*.stories|*.test).{ts,tsx}'
)) {
  const fileName = file.split('/').at(-1)?.split('.')[0]
  const path = dirname(file).replace('src/', '')
  const libPath = `${path}/${fileName}`
  if (!fileName) continue

  entries.set(libPath, url.fileURLToPath(new URL(file, import.meta.url)))
}
entries.set(
  'index',
  url.fileURLToPath(new URL('src/index.ts', import.meta.url))
)

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test' || mode === 'benchmark'

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
          tsconfigPath: 'tsconfig.build.json',
          exclude: 'src/setupTests.ts',
        }),
    ],
    build: {
      outDir: 'lib',
      lib: {
        entry: Object.fromEntries(entries),
        formats: ['cjs', 'es'],
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'focus-trap-react',
          '@uswds/uswds',
        ],
        output: {
          assetFileNames: 'assets/[name][extname]',
          preserveModules: true,
          preserveModulesRoot: 'src',
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
      alias: [
        {
          find: /.+\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|svg|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
          replacement: resolve(__dirname, '__mocks__/fileMock.js'),
        },
      ],
    },
  }
})
