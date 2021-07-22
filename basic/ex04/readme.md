## application bundling

### 개념

<img src="https://user-images.githubusercontent.com/52481037/126437340-6c7cf6ec-6d77-446a-b608-b36a6fa2e8c1.jpg" width="40%" />

1. webpack : 작게 분리된 많은 modules의 dependency을 분석 tool
2. bundling
    * bundle(하나의 js file)로 묶는 작업 수행
    * application build 작업 수행 
        * linting (ESLint, 문법 check) 작업
        * documentation (JSDoc)
        * testing(Mocha, Jest) 작업
        * 난독화 / 압축 (Uglify) 작업
        * bundling
3. 추상화 : JS 뿐만 아니라 다양한 asset(image, font, css)들도 module로 취급하고 추상화함

## project

1. project 생성
    ```bash
    mkdir ex04
    cd ex04
    npm init -y
    npm i -D express
    npm i -D webpack webpack-cli express
    ## webpack 실행
    npm node_modules/.bin/webpack --version
    ```
2. project directory
    ```
    /ex04
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |       |--- index.html
      |       |--- main.js      : build된 거
      |--- /src
      |       |--- index.js
      |       |--- App.js
      |--- dev-server
    ```
3. script
    ```json
    {
        ...
        "description": "",
        "main": "dev-server.mjs",
        "scripts": {
            "start": "node dev-server.mjs",
            "build": "npx webpack ./src/index.js -o ./public",
            "test": "echo \"Error: no test specified\" && exit 1",
        },
        ...
    }
    ```
    * mjs : module js
        * es6으로 코딩해놓았지만, webpack을 사용해서 ```"type": "module"```뺌. 그래서 es6으로 만든 dev-server 확장자를 mjs로 만듦

4. application 작성

    * [public/index.html]
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
            <script type='module' src='main.js'></script>
        </body>
        </html>
        ```

    * [src/App.js]
        ```js
        // DOM API
        const App = () => {
            const app = document.createElement('h1'); // h1 node
            app.textContent = 'Hello world'; // text node
            return app;
        }

        export {App};
        ```
        * module export : ```export {App}```

    * [src/index.js]
        ```js
        import { App } from './App.js'

        document
            .getElementById('root')
            .appendChild(App());
        ```
        * module import : ```import { App } from './App.js'```

5. build
    ```bash
    npm run build
    ```
    * 밑처럼 실행도 가능 (script에 있음)
        ```bash
        npx webpack ./src/index.js -o ./public
        ```
        * ./src/index.js : entry
6. 결론
    * good~