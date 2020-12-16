const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
  entry: [paths.source + '/index.js'],

  output: {
    filename: '[name].bundle.js',
    path: paths.build,
    publicPath: '/',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
          to: 'assets',
        },
      ],
    }),

    new ESLintPlugin(),

    new HtmlWebpackPlugin({
      favicon: paths.source + '/images/favicon.png',
      filename: 'index.html',
      template: paths.source + '/template.html',
      title: 'Webpack Starter',
    }),
  ],

  resolve: {
    alias: {
      '@/styles': paths.stylesAlias,
    },
  },
}
