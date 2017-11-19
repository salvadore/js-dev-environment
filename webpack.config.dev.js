import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,

  //hot reloading.. entry point..
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // // Create HTML file that includes reference to bundled JS.
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    //   inject: true
    // })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}

