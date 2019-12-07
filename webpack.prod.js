const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = webpackMerge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
    // new WebpackBundleAnalyzer()
  ]
});
