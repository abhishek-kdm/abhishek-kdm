const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const configs = require('./base.config.js');
const prodConfigs = require('./prod.config.js')

module.exports = merge(prodConfigs, {
	output: {
		filename: path.join(configs.filePath, '[name].[chunkhash].js')
	},

	optimization: {
		splitChunks: { chunks: 'all', name: true }
	},
});
