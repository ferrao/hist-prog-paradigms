'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = {
    loader: require.resolve('babel-loader'),
    options: {
        babelrc: true,
        presets: [require.resolve('@babel/preset-react')]
    }
};

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'deck.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [babelLoader]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [require.resolve('file-loader')]
            },
            {
                test: /\.css$/,
                include: [/node_modules/, /src/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    // Default for boilerplate generation.
    plugins: [
        new HtmlWebpackPlugin({
            title: 'History of Programming Paradigms',
            template: './src/index.html'
        })
    ]
};
