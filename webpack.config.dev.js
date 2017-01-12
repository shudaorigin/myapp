var webpack = require("webpack");
var webpackBase = require("./resource/webpack.config.js");


var cfg = Object.assign(webpackBase, {
    devtool: "cheap-module-eval-source-map"
});

//entry 
Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    cfg.entry[name] = []
        //���webpack-dev-server�ͻ���
        .concat("webpack-dev-server/client?http://localhost:9091")
        .concat(webpackBase.entry[name])
});

module.exports = cfg;