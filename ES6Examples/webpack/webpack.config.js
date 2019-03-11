module.exports = {
    entry: './assets/js/scripts.js',
    output: {
        filename: './public/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    pressets: ['es2015']
                }
            }
        ]
    }    
};