const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 8080
    }
}