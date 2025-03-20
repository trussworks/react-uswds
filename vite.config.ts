/// <reference types="vitest" />
import { resolve } from 'path'
import url from 'url'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'
import { checker } from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const uswdsIncludePaths = [
  'node_modules/@uswds',
  'node_modules/@uswds/uswds/packages',
]

/**
 * Pass `--mode uswds` to build uswds assets
 */
export default defineConfig(({ mode: _mode }) => {
  const isUswds = _mode === 'uswds'
  const isBundles = _mode === 'bundles'
  const mode = isUswds ? 'production' : isBundles ? 'test' : _mode
  const entryName = isUswds ? 'uswds' : 'index'
  const isTest = mode === 'test' || mode === 'benchmark'

  return {
    mode,
    // ignore some plugins if running tests
    plugins: [
      react(),
      !isTest &&
        checker({
          typescript: true,
        }),
      !isTest &&
        isUswds &&
        libAssetsPlugin({
          // ignore svg files as they will be inlined via svgr
          exclude: /\.svg/,
          // matches webpack names
          name: '[contenthash:20].[ext]',
        }),
      // default svg url pattern is `*.svg?react`, updated to `*.svg?svgr`
      svgr({
        svgrOptions: { icon: true, memo: true },
        include: '**/*.svg?svgr',
      }),
      !isTest && dts({ tsconfigPath: 'tsconfig.build.json' }),
    ],
    build: {
      outDir: 'lib',
      emptyOutDir: !isUswds, // add uswds assets onto lib build
      lib: {
        entry: isUswds
          ? resolve(__dirname, 'node_modules/@uswds/uswds/dist/css/uswds.css')
          : resolve(__dirname, `src/index.ts`),
        name: 'ReactUSWDS',
        formats: !isUswds ? ['cjs', 'es', 'iife', 'umd'] : ['es'],
        fileName: entryName,
      },
      cssCodeSplit: isUswds,
      assetsDir: './',
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'focus-trap-react',
        ],
        output: {
          // Support React Server Components
          // See: https://react.dev/reference/react/use-client
          banner: (assetInfo) =>
            assetInfo.fileName.endsWith('.js') ||
            assetInfo.fileName.endsWith('.mjs')
              ? '"use client";'
              : '',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
            'focus-trap-react': 'FocusTrap',
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return `${entryName}.css`
            return assetInfo.name ?? ''
          },
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
          loadPaths: uswdsIncludePaths,
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
      // bundles test added to default exclude list (so that it can be ran manually after build)
      exclude: [
        ...configDefaults.exclude,
        !isBundles ? 'src/bundles.test.tsx' : '',
      ],
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
          find: /.+\.svg\?svgr$/,
          replacement: resolve(__dirname, './__mocks__/svgrMock.js'),
        },
        {
          find: /.+\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|svg|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
          replacement: resolve(__dirname, '__mocks__/fileMock.js'),
        },
      ],
    },
  }
})
