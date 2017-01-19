var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './../public/'),
    //publicPath: './../public/',
    filename: 'ractMain.js'
  },
   resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss', '.styl'],
    },
   module: {
	loaders: [
	  {
        test: /\.jsx?$/,
        loader: "babel",
		exclude: /node_modules/
		/*
		exclude :[
				  /node_modules\/babel-/m,
				  /node_modules\/core-js\//m,
				  /node_modules\/regenerator-runtime\//m
				 ]
		*/
        //,include: path.join(__dirname, 'scripts')
      },
	  { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}	
    ]
  }
};