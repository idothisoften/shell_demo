const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: ['./entry.js'],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        jsonpFunction: 'search_app_jsonp',
        libraryTarget: 'commonjs',
        publicPath: '/apps/search/dist/'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'main',
        //     chunks: ['app'],
        //     minChunks: ((...args) => console.log(args), true)
        // }),
    ]
};
