const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));

module.exports = env => 
{
	env || (env = {});

	return {

		entry: './src/app/RouteNavigatorExample.ts',
		devtool: 'source-map',

		output: 
		{
			path: path.resolve(__dirname, 'dist'),
			filename: 'example.js'
		},

		resolve: 
		{
			extensions: ['.ts', '.tsx', '.js']
		},

		module: 
		{
			rules: 
			[
				{
					test: /\.tsx?$/, 
					loader: 'ts-loader'
				},
				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader'
				}
			]
		},

		plugins:
		[
			new CopyWebpackPlugin
			({
				patterns:
				[
					'./static'
				]
			})
		],

		devServer: 
		{
			https: false,
			host: 'localhost',
			port: '8086',
			clientLogLevel: 'none'
		},

	};
}