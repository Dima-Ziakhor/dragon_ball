const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bandle.js',
    assetModuleFilename: 'asset/img/[name]_[hash][ext]',
  },
  devServer: {
    port: 5000,
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCss.loader,

          'css-loader',
          'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCss({
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      title: 'Dragon ball',
      filename: 'index.html',
      template: './src/index.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Login',
      filename: 'login.html',
      template: './src/login.html',
      inject: false,
    }),
  ],
};
