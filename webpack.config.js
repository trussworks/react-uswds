const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BannerPlugin } = require('webpack')

const uswdsIncludePaths = [
  './node_modules/@uswds',
  './node_modules/@uswds/uswds/packages',
]

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
    uswds: './src/uswds.ts',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'ReactUSWDS',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // Preserve directives like "use client"
            directives: false,
          },
        },
      }),
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[id].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new BannerPlugin({
      // Support React Server Components
      // See: https://react.dev/reference/react/use-client
      banner: '"use client";',
      raw: true,
      entryOnly: true,
      test: /\.js$/,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      uswds: path.resolve(__dirname, './node_modules/@uswds/uswds'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.module\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[contenthash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: uswdsIncludePaths,
              },
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /\.module\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: uswdsIncludePaths,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/,
            resourceQuery: /svgr/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  icon: true,
                  memo: true,
                },
              },
            ],
          },
          {
            type: 'asset',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
        type: 'asset',
      },
    ],
  },
}
