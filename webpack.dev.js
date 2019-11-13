const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');

module.exports = webpackMerge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  stats: 'minimal',
  devtool: 'eval',
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    })
  ]
});
