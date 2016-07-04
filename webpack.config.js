'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        main: path.resolve(__dirname, 'app/main.entry.js'),
        vendor: path.resolve(__dirname, 'app/vendor.js'),
        style: path.join(__dirname, 'app/main.scss')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[id].js',
        publicPath: path.join(__dirname, 'build')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015'],
                    plugins: []
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
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

    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },

    sassLoader: {
        includePaths: [path.join(__dirname, 'app')],
        outputStyle: 'expanded'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
          'vendor', 'vendor.js', Infinity
        ),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ],

    devtool: 'cheap-source-map'
};
