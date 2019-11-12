const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = webpackMerge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
});
