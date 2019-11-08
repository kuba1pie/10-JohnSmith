const {resolve} = require('path')
module.exports = {
    entry: './src/script/script.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }
}