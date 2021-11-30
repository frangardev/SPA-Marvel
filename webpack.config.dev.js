const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    mode: 'development',
    resolve: {
      extensions : [".js"],
    },
    module: { 
        rules: [ 
          { 
            test: /\.js$/, 
            exclude: /node_modules/,
            use: { 
              loader: "babel-loader" 
            } 
          },
          {
            test: /\.(css|styl)$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
            ]
          } 
        ]  
    },
    plugins :[
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename : './index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        compress: true, 
        historyApiFallback: true, 
        port: 3007,
        open: true
    }
}