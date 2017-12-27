var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    ui: [
      './index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'bin'),
    filename: '[name].js',
    publicPath: '/bin/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },{
      test: /\.json$/,
      loader: 'json'
    }]
  },
  resolve: {
    alias: {
      bacon: "baconjs"
    }
  },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  externals: ['mdns', 'validator-js', 'ws']
}

