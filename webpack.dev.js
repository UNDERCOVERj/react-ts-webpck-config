const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    output: {
        filename: '[name].[hash:8].js'
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, './dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})