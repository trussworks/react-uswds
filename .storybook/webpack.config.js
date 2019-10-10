const path = require('path')

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.filter(
    rule => rule.test.toString() !== '/\\.css$/'
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
    test: /\.css$/,
    exclude: /\.module\.css$/i,
    use: ['style-loader', 'css-loader'],
  })

  config.module.rules.push({
    test: /\.module\.css$/i,
    include: path.resolve(__dirname, '../src'),
    use: [
      'style-loader',
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
