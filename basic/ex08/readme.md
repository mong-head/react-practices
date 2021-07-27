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
        * ```App``` : Object (Component)

### 02. 특징 2: Single Root Node

* React.createElement(1,2,3)
    * 1 : element(_String_) or component(_Object_)
        * _String_ : ```<div>```인 경우, ```'div'```
        * _Object_ : component(function or class) (```<App />```인 경우, ```App```)
    * 2 : props(property; 속성)
        ```js
        {
            id: 'hello',
            style: '~~~'
        }
        ```
    * 3 : contents
        * Text node (```<h2>App02</h2>```인 경우 'App02')
        * 자식 element : React.createElement(~~)
        * ```{}``` : JS code 실행

* react component 는 단일 node만 rendering할 수 있음
    * return 시에 여러 element or component 를 할 수 없음
    * error
        ```js
        return (
            <h2>App 02</h2>
            {React.createElement('p',{id:'test',className:'p_test'},'hi~~')}
        );
        ```
    * good ([App.js](src/02/App.js))
        ```js
        return (
            <div>
                <h2>App 02</h2>
                {React.createElement('p',{id:'test',className:'p_test'},'hi~~')}
            </div>
        );
        ```

### 03. JSX로 function component 작성

* [App.js](src/03/App.js)
    ```js
    import React from 'react';
    import Header from './Header';
    import Content from './Content';

    export default function(){

        return (
            <React.Fragment>
                <Header />
                <Content />
            </React.Fragment>
        );
    }
    ```

### 04. Pure React(React API)로 function component 작성

* use React.createElement

* [App.js](src/04/App.js)
    ```js
    import React, {Fragment} from 'react';
    import Header from './Header';
    import Content from './Content';

    export default function(){

        return (
            React.createElement(
                Fragment,
                null,
                React.createElement(Header),
                React.createElement(Content,null),
            )
        );
    }
    ```
* [index.js](src/04/index.js)
* [Content.js](src/04/Content.js)
* [Header.js](src/04/Header.js)

### 05. class component 작성

* 참고
    * [class 참고](https://github.com/mong-head/frontend-dev/tree/master/javascript-practices/es06#7-class-ex07)

    * [module export 참고](https://github.com/mong-head/frontend-dev/tree/master/javascript-practices/es06#8-module-export)

* extends React.Component
    * Component의 render함수 overriding

* [App.js](src/05/App.js)
    ```js
    import React, {Component,Fragment} from 'react';
    import Header from './Header';
    import Content from './Content';

    export default class extends Component{
        render(){
            return (
                <Fragment>
                    <Header name='Application05'/>
                    <Content />
                </Fragment>
            );
        }
    }
    ```
    * default니까 class 이름 없어도 됨

### 06. 특징 3: JSX 표현식 표기법 { _expression_ } 문제점: if-statement

* ```{}```내에서 if 구문 사용 X : 대신 삼항연산자 사용가능

* [Clock02.js](src/06/Clock02.js)
    ```js
    import React from 'react';

    export default function(){
        const date = new Date();

        const hour = date.getHours();
        const minute = date.getMinutes();
        const sec = date.getSeconds();

        return (
            <div>
                {("0"+(hour > 12 ? hour - 12: hour)).slice(-2)}
                : 
                {("0"+minute).slice(-2)} 
                : 
                {("0"+sec).slice(-2)}
                {hour>12 ? 'PM' : 'AM'}
            </div>
        );  
    }
    ```
    * if,for등 보다 함수 많이 사용하기(slice,map등등)

### 07. 특징 4: Blank space (공백)

* JSX에서는 공백없다고 생각하면 됨.
* 공백표현 : ```{ }```
    * ```{       }```이나 ```{ }```이나 공백개수 똑같음

### 08. Dynamic HTML Rendering 

### 09. Comment

* JSX != HTML
    * ```{/* */}``` : 추천(:star:)
    * ```<!-- -->``` 사용 못함
    * ```/* */```
        * component 밖에는 얼마든 사용해도 good
        * component 안에서는 사용하지 말기 : component화 되어버림(쓸데없이 자식생김)
    * ```// ``` : 주석으로 사용 X (사용하는 그대로 출력됨)

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
 