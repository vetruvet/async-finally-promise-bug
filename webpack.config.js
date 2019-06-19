module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src.js',
  output: {
    path: __dirname,
    filename: 'out.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'entry',
                modules: false,
                corejs: 3,
                debug: true,
                targets: [
                  'edge >= 17'
                ]
              }],
            ],
          }
        }
      }
    ]
  }
}
