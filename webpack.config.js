const path = require('path')

module.exports = {
  entry: './_dev/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webresources')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ]
  }
}
