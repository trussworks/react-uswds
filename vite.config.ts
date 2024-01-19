/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'
import checker from 'vite-plugin-checker'

const uswdsIncludePaths = [
  'node_modules/@uswds',
  'node_modules/@uswds/uswds/packages',
]

const sharedOptions = {
  build: {
    outDir: 'lib',
    assetsDir: './',
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Support React Server Components
        // See: https://react.dev/reference/react/use-client
        banner: (assetInfo) =>
          assetInfo.fileName.endsWith('.js') ||
          assetInfo.fileName.endsWith('.mjs')
            ? '"use client;"'
            : '',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
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
} satisfies UserConfig

export function createConfig(entryName: string, env: Record<string, string>) {
  const config: typeof sharedOptions & UserConfig = sharedOptions
  config.plugins = [
    !env.VITEST &&
      checker({
        typescript: true,
      }),
    !env.VITEST &&
      libAssetsPlugin({
        // ignore svg files as they will be inlined via svgr
        exclude: /\.svg(\?.*)?$/,
        // matches webpack names
        name: '[contenthash:20].[ext]',
      }),
    svgr({ svgrOptions: { icon: true, memo: true } }),
    !env.VITEST && dts({ tsconfigPath: 'tsconfig.build.json' }),
  ]
  config.build.emptyOutDir = entryName === 'index'
  config.build.lib = {
    entry:
      entryName === 'uswds'
        ? resolve(__dirname, 'node_modules/@uswds/uswds/dist/css/uswds.css')
        : resolve(__dirname, `src/${entryName}.ts`),
    name: 'ReactUSWDS',
    formats: entryName !== 'uswds' ? ['cjs', 'es', 'iife', 'umd'] : ['es'],
    fileName: entryName,
  }
  config.build.cssCodeSplit = entryName === 'uswds'
  config.build.rollupOptions.output = {
    ...config.build.rollupOptions.output,
    assetFileNames: (assetInfo) => {
      if (assetInfo.name === 'style.css') return `${entryName}.css`
      return assetInfo.name ?? ''
    },
  }
  return config
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return env.BUILD_USWDS
    ? createConfig('uswds', env)
    : createConfig('index', env)
})
