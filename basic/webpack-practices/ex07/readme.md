# webpack-practice : ex07

* webpack.config.js : 웹팩 설정해보기
    * 내가 만든 loader 설정 : text loader

## 1. project 생성

* 생성
    ```bash
    mkdir ex07
    cd ex07
    npm init -y
    ```
* 모듈 설치
    ```bash
    npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass file-loader
    ## webpack 설치 확인
    npx webpack --version
    ```
    * sass-loader
        * 의존 : node-sass
        * sass -> css loader 따라서 css loader 필요함
    * file-loader
        * for image file

* script
    ```json
      "scripts": {
        "start": "npx webpack server --progress",
        "build" : "npx webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
* structure
    ```txt
    /ex07
        |--- package.json
        |--- package-lock.json
        |--- /node-modules
        |--- /public
        |       |--- index.html
        |       |--- bundle.js                  [build 결과]
        |--- /src
        |       |--- hello.txt
        |       |--- text-loader.js             [내가 만든 loader]
        |       |--- index.js
        |       |--- App.js
        |--- webpack.config.js [webpack configuration file]   
    ```

## 2. config

* ES6이전 사용
* [webpack.config.js](webpack.config.js)
    ```js
    const path = require('path');

    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module : {
            rules: [{
                test: /\.txt$/i,
                loader: 'src/text-loader.js'
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

## 3. build

```bash
npx webpack
```
* webpack.config.js의 output section에 지정한 ```./public/bundle.js```에 bundling 됨
* build 꼭 해야함 (svg만들려면)

## 4. test server 실행 (dev-server)

```bash
npx webpack server --progress
```
* webpack dev-server 사용