// webpackの設定ファイル(必須)
// 細かい詳細
// https://qiita.com/ryokkkke/items/390647a7c26933940470

const path = require('path')
module.exports = {
  // bundleの起点ファイル
  entry: {
    bundle: './src/index.ts'
  },
  // bundleの出力ファイル
  output: {
    // __dirname = 現在のパス
    // path.join(a, b) = aのパスのb
    path: path.join(__dirname, 'dist'),
    // [name].js = bundle.js(entryのプロパティ)
    filename: '[name].js'
  },
  // importする時に、拡張子を描かなくて良くする為の設定
  resolve: {
    extensions: ['ts', '.js']
  },
  // localサーバーが参照するJS
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // サーバー立ち上がり時自動でブラウザを立ち上げる
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
