## applciation 분리

1. project 생성
    ```bash
    mkdir ex01
    cd ex01
    npm init -y
    npm i -D express
    ```
2. project directory
    ```
    /ex02
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |       |--- index.html
      |       |--- index.js
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

    [App.js]
    ```js
    // DOM API
    const App = () => {
        const app = document.createElement('h1'); // h1 node
        app.textContent = 'Hello world'; // text node
        return app;
    }
    ```

    [index.js]
    ```js
    document
    .getElementById('root')
    .appendChild(App());
    ```

5. test (run test server)
    ```bash
    npm start
    ```
6. 결론
    * 복잡한 application은 분리하는 것이 원칙
    * 전통적인 분리 방식
        * application code 를 여러 js로 옮기는 단순한 방식으로 분리
        * browser가 js loading순서 보장 X
        * 복잡하고 분리 file많아지면 dependency 관리 불가능