const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    watchFiles: ['src/*.html'],
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.js$/,
      exclude: '/node_modules',
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
    },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Todo List',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};