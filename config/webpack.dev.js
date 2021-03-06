const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('./paths')
const webpack = require('webpack')

module.exports = merge(common, {
  devServer: {
    compress: true,
    contentBase: paths.build,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
  },

  devtool: 'inline-source-map',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true,
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
})
