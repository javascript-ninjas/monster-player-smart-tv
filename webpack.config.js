var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/javascripts/main.js',

    resolve: {
        root: __dirname + '/app/javascripts/'
    },

    output: {
        path: __dirname + '/app/dist/',
        filename: 'bundle.js'
    },
    //http://webpack.github.io/docs/configuration.html#devtool
    devtool: "#cheap-module-source-map",

    resolve: {
        root: __dirname + '/app/',
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0'

            },
            {
                test: /\.(htm|html)$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new ngAnnotatePlugin({
            add: true
        })
    ]
};
