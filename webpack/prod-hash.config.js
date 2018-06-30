const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

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
  plugins: [
    new ManifestPlugin({
      filename: path.join(filePath, 'manifest.bundle.json'),
    }),
  ]
});
