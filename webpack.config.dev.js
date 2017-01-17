var webpack = require("webpack");
var merge = require('webpack-merge')
var webpackBase = require("./webpack.config.js");
//var baseWebpackConfig = require('./webpack.config.js')

var cfg = Object.assign(webpackBase, {
    devtool: "cheap-module-eval-source-map"
});

//entry 
Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    cfg.entry[name] = []
        //Ìí¼Ówebpack-dev-server¿Í»§¶Ë
        .concat("webpack-dev-server/client?http://localhost:9091")
        .concat(webpackBase.entry[name])
});

module.exports = cfg;

/*
module.exports = merge(baseWebpackConfig, {
  module: {
    //loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'development'
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),	
    new FriendlyErrors()
  ]
})
*/