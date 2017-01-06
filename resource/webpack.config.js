var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
     // {test: /\.css$/, loader: 'style!css'},
	  {test: /\.vue$/, loader: 'vue'}
    ]
  },
  /*
  vue: {
	  loaders: {
		js: 'babel'
	  }
  },
  */
  plugins: [
    new webpack.BannerPlugin('This file is created by shubs'),
	new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
}