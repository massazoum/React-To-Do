const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'images/\[name\][ext][query]',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
     filename: 'styles.css',
   }),
  ],
  module: {
    rules: [
     {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
       test: /\.(png|svg|jpg|gif)/i,
       type: 'asset/resource',
     },
    ],
  },
};
