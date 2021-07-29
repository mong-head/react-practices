# webpack-practice : ex06

* webpack.config.js : 웹팩 설정해보기
    * loader 설정 : image loader

## 1. project 생성

* 생성
    ```bash
    mkdir ex06
    cd ex06
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
    /ex04
        |--- package.json
        |--- package-lock.json
        |--- /node-modules
        |--- /public
        |       |--- /assets
        |       |       |--- /images
        |       |       |      |--- logo.svg    [build 결과]
        |       |--- bundle.js                  [build 결과]
        |       |--- index.html
        |--- /src
        |       |--- /assets
        |       |       |--- /css
        |       |       |      |--- index.css
        |       |       |--- /scss
        |       |       |      |--- App.scss
        |       |       |--- /images
        |       |       |      |--- logo.svg   
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
        mode: 'development',
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js',
            assetsModuleFileName: 'assets/images/[hash][ext]'
        },
        module : {
            rules: [{
                test: /\.(c|sc|sa)ss$/i,
                use: ['style-loader','css-loader','sass-loader']
            },{
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'assets/resource'
            }]
        },
        devtool: "eval-source-map",
        devServer: {
        contentBase: path.resolve("public"),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true,
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