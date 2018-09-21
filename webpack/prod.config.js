const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

const configs = require('./base.config.js');

module.exports = merge(configs.baseConfigs, {
  mode: 'production',
  optimization: { minimize: true },
  output: {
    filename: path.join(configs.filePath, '[name].' + configs.fileBaseName + '.js')
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new UglifyJsPlugin({
      test: /\.(js|jsx|ts|tsx)($|\?)/i,
      extractComments: true,
      warningsFilter: false,
      parallel: true,
      uglifyOptions: {
        keep_classnames: undefined,
        keep_fnames: false,
        sourceMap: true,
        compress: {
          warnings: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        }
      }
    }),

    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|jsx|ts|tsx)$/,
      threshold: 10240,
      minRatio: 0
    })

  ]
});
