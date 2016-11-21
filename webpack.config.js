'use strict';

const webpack = require('webpack');
const path = require('path');

//multi comp module.exports = [{}, {}, {}]
module.exports = {
    context: __dirname + '/frontend',
    entry: {
        index: "./index",
        about: "./about",
        common: "./common"
        // welcome: "./welcome"
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].js',
        library: '[name]'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            // chunks: ['about', 'index']
            // minChunks: 2
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};