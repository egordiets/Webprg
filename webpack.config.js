const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './js/index.js',
    // mode: 'development',
    output: {
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
              test: /\.(png|jpeg|gif|mp3)$/i,
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            },
            {
                test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\\.s[ac]css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname,'index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new BundleAnalyzerPlugin()
    ]
}