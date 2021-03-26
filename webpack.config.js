const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9000,
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src",
                  globOptions: {
                      ignore: [
                          '**/js/index.js',
                      ]
                }
            }],
            options: {
                concurrency: 100,
            },
        }),
    ],
};
