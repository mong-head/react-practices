# React(JSX기반) application refactoring

* DOM API로 만들어진 ex04를 refactoring (using JSX, webpack)
    * babel loader 사용

## 1. project

* project 생성
    ```bash
    npm init -y
    ```
* 설치
    ```bash
    ## 개발용
    npm i -D webpack webpack-cli webpack-dev-server
    npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
    ## 일반
    npm i react react-dom
    ```
    * babel
        * engine
            * core : 문법 체계는 X-자기가 직접 변환X; plugin이 그 역할을 함
        * plugin
            * preset-env : ex6 -> ex5
                * configuration 필요 : 브라우저 버전에 맞게 할 필요성 있음(config file 만듦)
            * preset-react

* scripts (package.json)
    ```json
      "scripts": {
        "start": "npx webpack server --progress",
        "build" : "npx webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
* structure
     ```text
    /ex06
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |       |--- index.html
      |       |--- bundle.js      : build된 거
      |--- /src
      |       |--- index.js
      |       |--- App.js
      |--- webpack.config.js [webpack configuration file]  
      |--- babel.config.json [babel configuration file]   
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
* [babel.config.js](babel.config.js)
    ```json
    {
        "presets": [["@babel/env",{
            "targets": {
                "ie":"11",
                "edge":"80",
                "firefox":"73",
                "chrome":"82",
                "opera":"69",
                "safari":"13"
            }
        }],"@babel/react"]
    }
    ```

## 3. application 작성

* [public/index.html](public/index.html)
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root"></div>
        <script type='module' src='bundle.js'></script>
    </body>
    </html>
    ```
* [src/App.js](src/App.js)
    ```js
    import React from 'react';

    const App = () => {
        const message = 'Hello World';
        //return component
        return (
            <div>
                <h1>{message}</h1>
            </div>
        );
    }

    export default App;
    ```

* [src/index.js](src/index.js)
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App.js'

    ReactDOM.render(<App/>, document.getElementById('root'));
    ```

## 4. build

```bash
npx webpack
```
* webpack.config.js의 output section에 지정한 ```./public/bundle.js```에 bundling 됨

## 5. test server 실행 (dev-server)

```bash
npx webpack server --progress
```
* webpack dev-server 사용