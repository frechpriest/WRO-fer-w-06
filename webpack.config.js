const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/docs",
        filename: "bundle.js"
    }
};