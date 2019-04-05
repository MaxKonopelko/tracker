const path = require("path");

module.exports = {
  entry: "./Spa_Source/index.tsx",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "./wwwroot/js")
  },
  module: {

    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }

};

