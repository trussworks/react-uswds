const path = require('path')

const webpackConfig = (config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: 'awesome-typescript-loader',
      },
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules = config.module.rules.filter(
    (rule) => rule.test.toString() !== '/\\.css$/'
  )
  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    exclude: /\.module\.(sa|sc|c)ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  config.module.rules.push({
    test: /\.module\.(sa|sc|c)ss$/i,
    include: path.resolve(__dirname, '../src'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/uswdsResources.scss'],
        },
      },
    ],
  })

  return config
}

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-viewport'],
  webpackFinal: async (config) => {
    return webpackConfig(config)
  },
}
