const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./server/index.js",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: path.resolve(__dirname, "dist"),
      // 出力ファイル名
      filename: "main.js"
    },
    target: "node",
    module: {
      rules: [
        {
            // 拡張子 .js の場合
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                // Babel を利用する
                loader: "babel-loader",
                // Babel のオプションを指定する
                options: {
                  presets: [
                    // プリセットを指定することで、ES5 に変換
                    "@babel/preset-env",
                    // React の JSX を解釈
                    "@babel/react"
                  ]
                }
              }
            ]
          },
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          exclude: /node_modules/,
          // TypeScript をコンパイルする
          use: "ts-loader",
        },
        {
            test: /\.css$/,
            use: [
              // CSSファイルを書き出すオプションを有効にする
              {
                loader: MiniCssExtractPlugin.loader,
              },
              // CSSを読み込む
              "css-loader",
            ],
          },
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "styles.css",
        }),
      ],
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
  };