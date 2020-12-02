const path = require("path");
const webpack = require("webpack");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/index.js",
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/env"],
          plugins: [
            isDevelopment && require.resolve('react-refresh/babel')
          ].filter(Boolean)
        }
      },
      {
        test: /\.s?css$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, isDevelopment ? "dist/" : "public/dist/"),
    publicPath: isDevelopment ? "/dist/" : "/public/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true
  },
  devtool: isDevelopment ? "cheap-module-source-map" : "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new (require('@pmmmwh/react-refresh-webpack-plugin'))()
  ].filter(Boolean)
};