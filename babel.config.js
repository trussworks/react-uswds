module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
}
