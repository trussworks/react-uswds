const { override, addWebpackAlias } = require('customize-cra')

const path = require('path')

// This is needed in order to correctly resolve React versions between the library & example app
module.exports = override(
  addWebpackAlias({
    react: path.resolve('./node_modules/react'),
  })
)
