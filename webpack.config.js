/**
 * Created by rouven on 11.04.17.
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'reactConditional',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: 'source-map',
    externals: {
        'prop-types': 'prop-types',
        'react': 'react',
        'react-dom': 'react-dom',
        'react-redux': 'react-redux',
        'redux': 'redux',
    },
};
