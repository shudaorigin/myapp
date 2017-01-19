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
	  {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      },
      { test:/\.vue$/, loader:'vue'},
      { test: /\.css$/, loader: 'style!css'}
	  //{ test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!jsx-loader?harmony'}
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  /*
  vue:{
    loaders:{
      js:'babel'
    }
  },
  */
  devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: 8888
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
