const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    // Set the mode to development or production
    mode: 'development',
    watch: true,

    // Control how source maps are generated
    devtool: 'inline-source-map',

    entry: {
        index: './src/js/index.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        open: true,
        compress: true,
        port: 8080,

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
