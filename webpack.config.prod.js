const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'prodaction',
  entry: './src/main.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bandle.js',
    assetModuleFilename: 'assets/images/[name]-[hash][ext]',
  },
  devServer: {
    port: 5000,
    static: './public',
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
  ],
};
