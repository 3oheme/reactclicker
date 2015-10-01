module.exports = {
    context: __dirname,
    entry: "./js/main.js",

    output: {
        filename: "main.js",
        path: __dirname + "/dist",
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
        }],
    },
}
