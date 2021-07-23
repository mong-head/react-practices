# CLI 사용법

* babel-cli가 babel-core사용해서 transpile(변환) : ES6 -> ES5

## project

* 생성
    ```bash
    npm init -y
    ```

* 설치
    ```bash
    npm i -D @babel/core @babel/cli
    ```

## src file

* ES6으로 작성
* [src/ex01.js](src/ex01.js)


## 변환(cli 사용)

    ```bash
    npx babel src -d dist/ex01.res.js
    ```