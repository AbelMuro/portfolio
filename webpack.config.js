const path = require('path');               
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const dotenv = require("dotenv-webpack");

module.exports = {

    entry: './src/index.js',                                    
    output: {                                                 
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'                 
    },
    systemvars: true,
    plugins: [                      
        new HtmlWebpackPlugin({              
            filename: 'index.html',   
            favicon: './src/favicon.ico',       
            template: './src/index.html'      
        }),
        new dotenv,
    ],
    
    module: {
        rules: [                               
            {                                  
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader', 
                    options: {presets: ['@babel/preset-env', '@babel/preset-react']} 
                    }                                                                 
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /\.(png|jpg|webp|wav|mp4)$/,
                type: 'asset/resource'
            },
        ]
    },
}
