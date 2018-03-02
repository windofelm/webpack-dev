const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
              options: {
                  presets: ['es2015']
              }
          }
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        //new HtmlWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9090, // http://localhost:9090/index.html
        hot: true
    }
};