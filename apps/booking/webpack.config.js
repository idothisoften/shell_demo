const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: ['./entry.js'],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        jsonpFunction: 'booking_app_jsonp',
        libraryTarget: 'commonjs',
        publicPath: '/apps/booking/dist/'
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
