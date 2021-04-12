const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

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
    module: {
        rules: [
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset',
                    enforce: 'pre',
                    use: {
                        loader: 'url-loader',
                    },
                },
        ],
    },
    plugins: [
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['mozjpeg', { quality: 50 }],
                    ['jpegtran', { progressive: true,quality: [0.5, 0.5] }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                        'svgo',
                        {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
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
