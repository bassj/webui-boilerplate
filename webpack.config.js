const path = require('path');

module.exports = {
    entry: './autocomplete/src/autocomplete.js',
    watch: true,
    mode: 'production',
    optimization: {
        minimize: false,
    },
    output: {
        path: path.resolve(__dirname, 'autocomplete'),
        filename: 'autocomplete.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
            },
        ],
    },
};