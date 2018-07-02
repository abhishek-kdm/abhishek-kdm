const path = require('path');
const webpack = require('webpack');
const entry = './src';

module.exports = {
  entry: ['babel-polyfill', path.resolve(entry, 'index.jsx')],

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: [
                'transform-async-to-generator',
                'transform-object-rest-spread',
                'syntax-dynamic-import',
                'transform-class-properties'
              ]
            }

          }
        ]
      },
    ]
  },

  resolve: {
    modules: [path.resolve('node_modules'), path.resolve(entry)],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
