# Core library

1. 변환 규칙을 source에 적용해서 변환 file를 생성
2. 변환 규칙은 X 
3. plugin이 변환 규칙 가짐

## project

* 생성
    ```bash
    npm init -y
    ```

* 설치
    ```bash
    npm i -D @babel/core
    ```

## core library 사용

    ```js
    const babel = require('@babel/core');

    const result = babel.transform("const app = () => 1;",{}); // ES6

    console.log(result);
    ```
    * babel loader가 babel-core 사용