const path = require('path')

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.filter(
    (rule) => rule.test.toString() !== '/\\.css$/'
  )

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })

  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    exclude: /\.module\.(sa|sc|c)ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
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
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
