const { resolve } = require('path');


module.exports = (env) => ({
	entry: resolve('src', 'index.tsx'),
	output: {
		filename: env.production ? `[name].[chunkhash].js` : `[name].js`,
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
		]
	},

	resolve: {
		modules: [resolve('node_modules'), resolve('src'), resolve('assets')],
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
	}
});
