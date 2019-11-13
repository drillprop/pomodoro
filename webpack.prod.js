const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = webpackMerge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
  // plugins: [new WebpackBundleAnalyzer()]
});
