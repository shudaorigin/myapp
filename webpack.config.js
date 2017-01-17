var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './resource/entry.js',
  output: {
    path: path.resolve(__dirname, './public/'),
    publicPath: '/public/',
    filename: 'appMain.js'
  }, 

  module: {
    loaders: [
      //转化ES6语法
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      //解析.vue文件
      { test:/\.vue$/, loader:'vue'},
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
    }),
	new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
