const path = require('path')

const webpackConfig = (config) => {
  config.resolve.alias.uswds = path.resolve(__dirname, '../node_modules/uswds')

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

  const fileLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg')
  )
  fileLoaderRule.exclude = /\.svg$/

  config.module.rules.push({
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
            },
          },
        ],
      },
      {
        type: 'asset',
      },
    ],
  })

  return config
}

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
    },
  },
  webpackFinal: async (config) => {
    return webpackConfig(config)
  },
}
