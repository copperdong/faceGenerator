const path = require('path');

const config = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                use: ['babel-loader'],
                test: /\.js?$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 9000,
        contentBase: path.join(__dirname),
        watchOptions: {aggregateTimeout: 300, poll: 1000},
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
};


module.exports = config;
