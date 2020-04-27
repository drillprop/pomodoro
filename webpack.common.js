const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: {
    main: './src/index.tsx',
    sw: './src/sw.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    moment: 'moment',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.(mp3|ogg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new DotEnv(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/public/favicon.ico',
    }),
    new WebpackPwaManifest({
      name: 'Pomodoro',
      filename: 'manifest.json',
      fingerprints: false,
      ios: true,
      inject: true,
      icons: [
        {
          src: path.resolve('src/public/pwa-icon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('src/public/pwa-icon.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
        {
          src: path.resolve('src/public/pwa-icon.png'),
          sizes: [36, 48, 72, 96, 144, 192],
          destination: path.join('icons', 'android'),
        },
      ],
    }),
  ],
};
