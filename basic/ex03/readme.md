## applciation 모듈화, 분리

1. project 생성
    ```bash
    mkdir ex01
    cd ex01
    npm init -y
    npm i -D express
    ```
2. project directory
    ```
    /ex03
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |       |--- index.html
      |       |--- index.js
      |       |--- App.js
      |--- dev-server
    ```
3. script
    ```json
    {
        ...
        "description": "",
        "type": "module",
        "main": "dev-server.js",
        "scripts": {
            "start": "node dev-server",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        ...
    }
    ```
    * type : strict 여서 써줘야함

4. application 작성

    * [App.js]
        ```js
        // DOM API
        const App = () => {
            const app = document.createElement('h1'); // h1 node
            app.textContent = 'Hello world'; // text node
            return app;
        }

        export {App}
        ```
        * module export : ```export {App}```

    * [index.js]
        ```js
        import { App } from './App.js'

        document
            .getElementById('root')
            .appendChild(App());
        ```
        * module import : ```import { App } from './App.js'```

5. test (run test server)
    ```bash
    npm start
    ```
6. 결론
    * frontend application 수백개의 모듈로 분리된 경우, 브라우저에서 개별적으로 이 모듈들을 import하는 것은 상당히 비효율적
    * frontend application은 JS외에 다양한 asset(html,css,image,font)에 대한 loading 동기화도 고려되어야 한다.