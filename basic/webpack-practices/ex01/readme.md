# webpack-practice : ex01

* webpack module 설치하고 build 해보기

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
* structure
    ```txt
    /ex01
        |--- package.json
        |--- package-lock.json
        |--- /node-modules
        |--- /public
        |       |--- index.html
        |       |--- main.js
        |--- /src
        |       |--- index.js
        |       |--- App.js
        |--- dev-server.mjs  
    ```

* script
    ```json
    "scripts": {
        "start": "node dev-server.mjs",
        "build" : "npx webpack ./src/index.js -o ./public",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

## 2. build

* ```./dist/main.js```로 bundling : ```npx webpack ./src/index.js```
* ```./public```로 bundling : ```npx webpack ./src/index.js -o ./public```(:star:)

## 3. test server 실행 (dev-server)

```bash
node dev-server.mjs
```
* ES6 module로 실행
    * method 1 : 확장자를 mjs -> 사용
    * method 2 : package.json에서 script내에 ```"type":"module"```해줌 -> webpack에 영향받음,안씀