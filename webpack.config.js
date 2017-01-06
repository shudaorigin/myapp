var webpack = require('webpack')
module.exports = {
  entry: './resource/entry.js',
  output: {
    path: __dirname,
    filename: './resource/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
	  ,
	  {test: /\.vue$/, loader: 'vue'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by shubs')
  ]
}
