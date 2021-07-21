## 전통적인 DOM API 기반 application

1. project 생성
    ```bash
    mkdir ex01
    cd ex01
    npm init -y
    npm i -D express
    ```
2. project directory
    ```
    /ex01
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

    [index.js]
    ```js
    ```

5. test (run test server)
    ```bash
    npm start
    ```
6. 결론
    * DOM API로 직접 JS code 로 호출
    * 주로 DOM 조작에 특화된 jQuery 같은 library 활용
    * 장점은 작성된 applcation code의 전달이 easy~ (작성된 대로 js파일을 html에 link)