# React(API 기반) application refactoring

* DOM API로 만들어진 ex04를 refactoring (using React API, webpack)

## 1. project

* project 생성
    ```bash
    npm init -y
    ```
* 설치
    ```bash
    npm i -D webpack webpack-cli webpack-dev-server
    npm i react react-dom
    ```
* scripts (package.json)
    ```json
      "scripts": {
        "start": "npx webpack server --progress",
        "build" : "npx webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
* structure
     ```
    /ex04
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

    export const App = () => {
        const app = React.createElement('h1', null, 'Hello World'); // (element, 부모, 자식)
        return app;
    }
    ```

* [src/index.js](src/index.js)
    ```js
    import ReactDOM from 'react-dom';
    import { App } from './App.js'

    ReactDOM.render(App(), document.getElementById('root'));
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