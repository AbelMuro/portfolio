const path = require('path');               
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv-webpack");

module.exports = {

    entry: './src/index.js',                                    
    output: {                                                 
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'                 
    },
    plugins: [                      
        new HtmlWebpackPlugin({              
            filename: 'index.html',   
            favicon: './public/icons/favicon.ico',       
            template: './src/index.html'      
        }),
        new dotenv({systemvars: true}),
        new CopyWebpackPlugin({
            patterns: [{ from: 'public', to: '' }],   
          }),
    ],
    devServer: {
        port: 3000,
        allowedHosts: 'all'
    },
    module: {
        rules: [                               
            {                                  
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [[
                            'babel-plugin-root-import',
                            {
                                rootPathSuffix: './src',
                                rootPathPrefix: '~/'
                            },
                            'src directory'
                        ],
                        [
                            'babel-plugin-root-import',
                            {
                                rootPathSuffix: './src/Components',
                                rootPathPrefix: '!/'
                            },
                            'components directory'
                        ]
                    ]
                    } 
                }                                                                 
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}, 
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        }
                ]
            },
            {
                test: /\.(png|jpg|webp|wav|mp4|svg)$/,
                type: 'asset/resource'
            },
        ]
    },
}
