# webpack-practice : ex02

* webpack.config.js : 웹팩 설정해보기

## 1. project 생성

* 생성
    ```bash
    mkdir ex01
    cd ex01
    npm init -y
    ```
* 모듈 설치
    ```bash
    npm i -D webpack webpack-cli express
    ## webpack 설치 확인
    npx webpack --version
    ```

* script
    ```json
    "scripts": {
        "start": "node dev-server.mjs",
        "build" : "npx webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
* structure
    ```txt
    /ex02
        |--- package.json
        |--- package-lock.json
        |--- /node-modules
        |--- /public
        |       |--- index.html
        |       |--- bundle.js
        |--- /src
        |       |--- index.js
        |       |--- App.js
        |--- dev-server.mjs  
        |--- webpack.config.js [webpack configuration file]   
    ```

## 2. build

* ```npx webpack```
    * webpack.config.js의 output section에 지정한 ```./public/bundle.js```에 bundling 됨

## 3. config

* ES6이전 사용
* [webpack.config.js](webpack.config.js)
    ```js
    const path = require('path');

    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        }
    }
    ```

## 4. test server 실행 (dev-server)

```bash
node dev-server.mjs
```
* ES6 module로 실행
    * method 1 : 확장자를 mjs -> 사용
    * method 2 : package.json에서 script내에 ```"type":"module"```해줌 -> webpack에 영향받음,안씀


