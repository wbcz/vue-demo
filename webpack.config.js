var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.join(__dirname + '/main.js'),
	output: {
		path:path.resolve(__dirname, './dist'),
	    publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test: /\.html$/,
				loader: 'vue-html'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url',
				query: {
				  limit: 10000,
				  name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	devServer: {
	    historyApiFallback: true,
	    noInfo: true,
	    port: 2222
	},
	devtool: 'eval-source-map'
}