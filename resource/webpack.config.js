var webpack = require('webpack')
var path = require('path')
module.exports = {
  resolve: { fallback: path.join(__dirname, "node_modules") },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") },
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, './../public/'),
    publicPath: '/',
    filename: 'build.js'
  }, 

  module: {
    loaders: [
      //转化ES6语法
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
                    presets: ['es2015']
                }
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      //解析.vue文件
      {
        test:/\.vue$/,
        loader:'vue'
      },
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  vue:{
    loaders:{
      js:'babel'
    }
  },
  /*
  resolve: {
    extensions: ['', '.coffee', '.js']
  }*/
  plugins: [
    new webpack.BannerPlugin('This file is created by shubs'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
	/*,
    // minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // optimize module ids by occurence count
    new webpack.optimize.OccurenceOrderPlugin()
	*/
    
  ]
}