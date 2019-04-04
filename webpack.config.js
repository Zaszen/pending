var wwwroot = __dirname + '/dist/bundles';
var bundleProd = (process.env.NODE_ENV === 'production');

var resolve = require('path').resolve;
var webpack = require('webpack');
var WriteAssetsWebpackPlugin = require('write-assets-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var autoprefix = require("less-plugin-autoprefix");

var plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    
];

if (bundleProd) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    );
} else {
    plugins.push(
        new WriteAssetsWebpackPlugin({
            force: true, extension: ['js', 'css']
    }));

    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = {
    mode: bundleProd ? "production" : "development",
    performance: {
        maxEntrypointSize: 400000000,
        maxAssetSize: 10000000
    },
    stats: { children: false, warnings: false },
    entry: {
        bundle: [
            'babel-polyfill',
            resolve(__dirname, './src/index.js')
        ]
    },
    output: {
        path: wwwroot,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            plugins: [
                                new autoprefix({
                                    remove: false,
                                    browsers: [
                                        "Chrome >= 52",
                                        "FireFox >= 44",
                                        "Safari >= 7",
                                        "Explorer 11",
                                        "last 4 Edge versions"
                                    ]
                                })
                            ]
                        }
                    }

                ]
            }
        ]
    },
    plugins: plugins
};
