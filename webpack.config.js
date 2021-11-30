const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
    entry: "./src/index.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
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
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ]
    }
}