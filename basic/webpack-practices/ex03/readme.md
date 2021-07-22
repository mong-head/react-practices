# webpack-practice : ex03

* webpack.config.js : 웹팩 설정해보기
    * devServer 설정

## 1. project 생성

* 생성
    ```bash
    mkdir ex03
    cd ex03
    npm init -y
    ```
* 모듈 설치
    ```bash
    npm i -D webpack webpack-cli webpack-dev-server
    ## webpack 설치 확인
    npx webpack --version
    ```

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
    /ex03
        |--- package.json
        |--- package-lock.json
        |--- /node-modules
        |--- /public
        |       |--- index.html
        |       |--- bundle.js
        |--- /src
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

* ```npx webpack```
    * webpack.config.js의 output section에 지정한 ```./public/bundle.js```에 bundling 됨

## 4. test server 실행 (dev-server)

```bash
npx webpack server --progress
```
* webpack dev-server 사용