/// <reference types="vitest" />
import { resolve } from 'node:path'
import url from 'url'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { checker } from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const uswdsIncludePaths = [
  'node_modules/@uswds',
  'node_modules/@uswds/uswds/packages',
]

const VITE_MODE = {
  dev: 'dev',
  preview: 'preview',
  build: 'build',
  test: 'test',
  benchmark: 'benchmark',
}

export default defineConfig(({ mode }) => {
  const isTest = [VITE_MODE.test, VITE_MODE.benchmark].includes(mode)

  return {
    // ignore some plugins if running tests
    plugins: [
      react(),
      !isTest &&
        checker({
          typescript: true,
        }),
      // default svg url pattern is `*.svg?react`, updated to `*.svg?svgr`
      svgr({
        svgrOptions: { icon: true, memo: true },
        include: '**/*.svg?svgr',
      }),
    ],
    build: {
      outDir: 'lib',
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'focus-trap-react',
          '@uswds/uswds',
        ],
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
