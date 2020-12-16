const path = require('path')

module.exports = {
  build: path.resolve(__dirname, '../dist'),

  public: path.resolve(__dirname, '../public'),

  source: path.resolve(__dirname, '../src'),

  stylesAlias: path.resolve(__dirname, '../src/styles/'),
}
