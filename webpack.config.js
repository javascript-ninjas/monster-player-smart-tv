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

    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    loose: 'es6.modules,es6.classes,es6.properties.computed'
                }
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
