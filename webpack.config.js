const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "app.js"
    },
    module: {
        rules: [
          {
              test: /\.scss$/,
              use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }]
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015']
              }
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: "file-loader",
            options: {
              outputPath: 'assets/fonts/'
            }
          }
        ]
    }
};