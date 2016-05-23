const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'entry.js'),
        style: path.join(__dirname, 'styles/main.scss')
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[id].js',
        publicPath: path.join(__dirname, 'build')
    },

    debug: true,
    devtool: 'source-map', // or 'inline-source-map'

    resolve: {
        root: [path.resolve(__dirname), path.resolve(__dirname, './styles')],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            }
        ]
    },

    sassLoader: {
        includePaths: [path.join(__dirname, 'styles')],
        outputStyle: 'expanded'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};
