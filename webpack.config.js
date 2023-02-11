// webpackの設定ファイル(必須)

const path = require('path')
module.exports = {
  // bundleの起点ファイル
  entry: './src/index.ts',
  // bundleの出力ファイル
  output: {
    // __dirname = 現在のパス
    // path.join(a, b) = aのパスのb
    path: path.join(__dirname, 'dist'),
    // [name].js = bundle.js(entryのプロパティ)
    filename: 'bundle.js'
  },
  // importする時に、拡張子を描かなくて良くする為の設定
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true
  },
  // loaderの設定を行うことが多い
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}
