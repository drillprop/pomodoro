const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = webpackMerge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin()
    // new WebpackBundleAnalyzer()
  ]
});
