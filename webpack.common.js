const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./dist/main.html"
    })],
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.html$/,
              use: ["html-loader"]
            },
              {
                test: /\.(svg|png|jpeg|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                  }
                }
              },
          ]
      },

};
