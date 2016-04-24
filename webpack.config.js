module.exports = {
    context: __dirname,
    entry: {
        jsx: "./index.jsx",
        css: "./main.css",
        html: "./index.html",
    },

    output: {
        path: __dirname + "/src",
        filename: "bundle.js",
    },
    module: {
        preLoaders: [
            //Eslint loader
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader"},
        ],
        loaders: [
            { test: /\.html$/, loader: "file?name=[name].[ext]" },
            { test: /\.css$/, loader: "file?name=[name].[ext]" },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot","babel"]},
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    eslint: {
        configFile: './.eslintrc'
    },
};
