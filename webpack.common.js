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
        test: /\.mp3$/,
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
      icons: [
        {
          src: './src/public/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
          density: '0.75',
        },
        {
          src: './src/public/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          density: '1.0',
        },
        {
          src: './src/public/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          density: '1.5',
        },
        {
          src: './src/public/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          density: '2.0',
        },
        {
          src: './src/public/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          density: '3.0',
        },
        {
          src: './src/public/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          density: '4.0',
        },
      ],
    }),
  ],
};
