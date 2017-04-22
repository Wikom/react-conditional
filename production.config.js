/**
 * Created by rouven on 11.04.17.
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'reactConditional',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true
            },
            output: {
                comments: false
            }
        })
    ],
    externals: {
        "prop-types": "prop-types",
        "react": "react",
        "react-dom": "react-dom",
        "react-redux": "react-redux",
        "redux": "redux"
    }
};
