const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const configs = require('./base.config.js');
const prodConfigs = require('./prod.config.js')

const filePath = configs.filePath;

module.exports = merge(prodConfigs, {
  output: {
    filename: path.join(filePath, '[name].[chunkhash].js')
  },

  optimization: {
    splitChunks: { chunks: 'all', name: true }
  },
});
