var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
    mode: 'development',

    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
               test: /\.(png|svg|jpg|gif)$/,
               use: [
                           'url-loader'
                         ]
           }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        contentBase: "./build",
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}