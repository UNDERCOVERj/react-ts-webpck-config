const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outputLib = path.resolve(__dirname, './dist');
const entryLib = path.resolve(__dirname, './src');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        home: entryLib + '/pages/home/index.tsx',
        login: entryLib+ '/pages/login/index.tsx'
    },
    output: {
        path: outputLib,
        filename: 'js/[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                // options: {
                //     transpileOnly: true
                // }
                // use: 'happypack/loader?id=ts'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            }

        ]
    },
    resolve: {
        alias: {
            '@home': entryLib + '/pages/home',
            '@login': entryLib + '/pages/login'
        },
        extensions: [ '.js', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'indexTitle',
            template: entryLib + '/pages/home/index.html',
            filename: 'home.html',
            chunks: ['home', 'vendor'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            title: 'loginTitle',
            template: entryLib + '/pages/login/index.html',
            filename: 'login.html',
            chunks: ['login', 'vendor'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new CleanWebpackPlugin([outputLib]),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
        // new ForkTsCheckerWebpackPlugin({
        //     tslint: false
        // }),
        // new HappyPack({
        //     id: 'ts',
        //     threadPool: happyThreadPool,
        //     loaders: [
        //       {
        //         path: 'ts-loader',
        //         query: { happyPackMode: true, transpileOnly: true },
        //       },
        //     ],
        // })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css\.*(?!.*map)/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
                canPrint: true
            })
        ]
    }
}