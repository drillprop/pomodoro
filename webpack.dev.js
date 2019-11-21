const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  stats: 'minimal',
  devtool: 'cheap-module-eval-source-map'
});
