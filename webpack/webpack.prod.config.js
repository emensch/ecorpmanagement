var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(path.join(__dirname, '../dist'));
console.log(process.cwd());

module.exports = {
    entry: [
        './client'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions:         ['', '.js', '.jsx']
    },
    output: {
        path:       path.join(__dirname, '../dist'),
        filename:   'bundle.js',
        publicPath: '/'   
    },
    module: {
        loaders: [
            {
                test:       /\.jsx?$/,
                exclude:    /node_modules/,
                loader:    'babel'
            },
            {
                test:       /\.scss$/,
                loader:     ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
}