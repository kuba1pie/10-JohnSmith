const {resolve} = require('path')
module.exports = {
    entry: './src/script/script.js',
    watch: true,
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }
}