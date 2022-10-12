const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

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
          "sass-loader"
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /\.module\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            sassOptions: {
              includePaths: [
                "./node_modules/@uswds",
                "./node_modules/@uswds/uswds/packages",
              ],
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
