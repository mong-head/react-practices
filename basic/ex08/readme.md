# JSX Tutorial

## learn what

### 01. 특징 1: HTML과 차이점

* [babel에서 어떻게 변환되는지 확인 사이트](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4AocpAD0ljgBMlMUBXAGy1YDsNgJuACgCUAb3JxJcIjFZRucQRKkqAPA2AA3AHzKV-uKoAWAJm0ApAMoANOLJjRgKdqoD0p3QYOqw2gAwAjAB0cICdS4Crk3ABAFxwABIAKgCyADKAPzVwgBQzgC7jgAgTbr56-m4aOkXCFAC-QA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.8&externalPlugins=)

* HTML tag로 작성하지만, babel로 변환시 React.createElement로 됨(React Element임)
    * [App.js](src/01/App.js)
        ```js
        import React from 'react';

        export default function(){
            return (
                <div>
                    {/* 주석은 이렇게 달자 */}
                    <h2>JSX tutorial</h2>
                    <p>01. 특징 1: HTML과 차이점</p>

                    <input type='text' maxLength='10' />

                    <br/>

                    <div id={'box'} className='box'>
                        box입니다.
                    </div>
                </div>
            );
        }
        ```
        * ```<div>```등등의 부분은 html이 아니라 ```React.createElement('div',속성,내용,자식)```로 바꿔짐
        * 주석
            * ```//``` 사용 X : React element 됨
            * ```{/**/}``` 사용 O : React element X
        * 속성 name
            * Camel Cased : ```maxLength```,```className```처럼 하기
            * based by DOM API
                * HTML 로```<div id='box' class='box'></div>```가 있을 때, class가 box인 것을 찾을 경우
                * ```document.getElementById('box').className= 'box'```로 찾음
        * element는 꼭 닫혀야 함
            * 그래야 자식을 찾을 수 있음
            * error: ```<br>```, good: ```<br/>```

    * [index.js](src/01/index.js)
        * ```<App />``` -> ```React.createElement(App, null)```

### 02. 특징 2: Single Root Node
### 03. JSX로 function component 작성
### 04. Pure React(React API)로 function component 작성
### 05. class component 작성
### 06. 특징 3: JSX 표현식 표기법 { _expression_ } 문제점: if-statement
### 07. 특징 4: Blank space (공백)
### 08. Dynamic HTML Rendering 

## project

* ex07의 package.json, package-lock.json 복사
    * module 설치 : ```npm i```

* scripts (package.json)
    ```json
    "scripts": {
        "build": "npx webpack --mode production",
        "debug": "npx webpack server --progress --mode development --env"
    },
    ```
    * env : env줘서 원하는 예제 source 실행 가능
* config
    * [webpack.config.js](webpack.config.js)
        * env 변수 입력받음 -> 함수화
        ```js
        const path = require("path");

        module.exports = (env) => {
        const entry = path.resolve(`src/${env.src}/index.js`);
            return {
                mode: "none",
                entry: entry,
                output: {
                path: path.resolve("public"),
                filename: "bundle.js",
                },
                module: {
                rules: [
                    {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        { loader: "css-loader", options: { modules: true } },
                    ],
                    },
                    {
                    test: /\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
                    loader: "file-loader",
                    options: {
                        outputPath: "/assets/images",
                        name: "[name].[ext]",
                    },
                    },
                    {
                    test: /\.js$/i,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    },
                ],
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
                },
            };
        };
        ```

## (Useage)Run Examples

```bash
npm run debug src={no}
```
* src의 01예제 실행하고 싶은 경우 : ```npm run debug src=01```
 