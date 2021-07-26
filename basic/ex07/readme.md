# CRA로 만든 Application 직접 설정해서 만들어 보기

* CRA로 만든 화면처럼 나오게 만들기
    * use webpack
    * use babel

## 1. project

* project 생성
    ```bash
    npm init -y
    ```
* 설치
    ```bash
    ## webpack
    npm i -D webpack webpack-cli webpack-dev-server

    ## loader
    npm i -D style-loader css-loader file-loader babel-loader

    ## babel
    npm i -D @babel/core @babel/cli  
    npm i -D @babel/preset-env @babel/preset-react

    ## react
    npm i react react-dom
    ```
* scripts (package.json)
    ```json
      "scripts": {
        "debug": "npx webpack server --progress",
        "build" : "npx webpack",
    },
    ```
* structure
     ```
    /ex07
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |       |--- /assets/images/logo.svg      : build 된 거
      |       |--- bundle.js                    : build된 거
      |       |--- index.html
      |--- /src
      |       |--- /css
      |       |      |--- App.css
      |       |      |--- index.css
      |       |--- index.js
      |       |--- App.js
      |       |--- logo.svg
      |--- webpack.config.js [webpack configuration file]   
      |--- babel.config.js [babel configuration file]   
      ```

## 2. config

* [webpack.config.js](webpack.config.js)
    ```js
    const path = require('path');

    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },{
                test: /\.svg$/i,
                loader: 'file-loader',
                options: {
                    outputPath: '/assets/images',
                    name: '[name].[ext]'
                }
            },{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
        },
        devServer: {
            contentBase: path.resolve('public'),
            host: "0.0.0.0",
            port: 9999,
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    }
    ```
* [babel.config.json](babel.config.json)
    ```json
    {
        "presets": [["@babel/preset-env",{
                "targets": {
                    "ie": "11",
                    "edge":"89",
                    "firefox":"92",
                    "chrome":"90",
                    "opera":"76",
                    "safari":"15"
                }
            }],"@babel/preset-react"
        ]
    }
    ```
## 3. build

```bash
npx webpack
```
* webpack.config.js의 output section에 지정한 ```./public/bundle.js```에 bundling 됨

## 4. test server 실행 (dev-server)

```bash
npx webpack server --progress
```
* webpack dev-server 사용

## 5. useage

* 3,4에 해당하는 내용을 package.json scripts에 설정해놓음
```bash
npm run build
npm run debug
```