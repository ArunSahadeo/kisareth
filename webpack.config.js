const
	devMode = process.env.NODE_ENV != 'production',
	path = require('path'),
	buildDir = path.join(__dirname, 'assets', 'build'),
	FileManagerPlugin = require('filemanager-webpack-plugin'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
	UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
	webpack = require('webpack')
;

// Define dirs

const
	nodeDir = './node_modules',
    imgDir = './assets/img',
    fontDir = './assets/fonts',
	scriptDir = './assets/js',
	styleDir = './assets/scss'
;

// Define paths

const paths = {
    scripts: [
        scriptDir + '/event-bus.js',
        scriptDir + '/tracking.js',    
        scriptDir + '/app.js'
    ],
};

module.exports = {
    target: 'web',
    entry: {
        'scripts.min.js': paths.scripts,
    },

    output: {
        filename: '[name]',
        path: buildDir + '/js'
    },

    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    'ie': '10'
                                }
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'	
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                            name: '[name].[ext]'
                    }
                }]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJSPlugin({
            include: /\.min\.js$/
        })],
    },
    plugins: [
        new FileManagerPlugin({
            onStart: {
                delete: [
                    buildDir
                ],
                mkdir: [
                    buildDir
                ]
            },
            onEnd: {
                copy: [
                    { source: fontDir + '/*', destination: buildDir + '/fonts' },
                    { source: imgDir + '/*', destination: buildDir + '/img' },
                ],
            }
        }),
    ]
};
