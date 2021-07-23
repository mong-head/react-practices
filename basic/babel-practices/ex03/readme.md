# babel plugin

* babel-cli가 babel-core사용해서 transpile(변환) : ES6 -> ES5

## project

* 생성
    ```bash
    npm init -y
    ```

* 설치
    ```bash
    npm i -D @babel/core @babel/cli 

    ## plugin
    npm i -D @babel/plugin-transform-block-scoping
    npm i -D @babel/plugin-transform-parameters
    npm i -D @babel/plugin-transform-template-literals
    npm i -D @babel/plugin-transform-for-of
    ```

## src file

* ES6으로 작성
* [src/ex01.js](src/ex01.js)


## plugin 적용

1. transpile : block scope variance (@babel/plugin-transform-block-scoping)

    ```bash
    npx babel src/ex01.js -o dist/ex01.01.js --plugins @babel/plugin-transform-block-scoping
    ```
    * ```const```, ```let``` --> ```var```
    * [변환 결과](dist/ex01.01.js)

2. transpile : object desctructing (@babel/plugin-transform-parameters)

    ```bash
    npx babel src/ex01.js -o dist/ex01.02.js --plugins @babel/plugin-transform-parameters
    ```
    * ```({name,no}) => {}``` --> ```_ref => { let { name,no } = _ref }```
    * [변환 결과](dist/ex01.02.js)

3. transpile : template 문자열 (@babel/plugin-transform-template-literals)

    ```bash
    npx babel src/ex01.js -o dist/ex01.03.js --plugins @babel/plugin-transform-template-literals
    ```
    * ``` `${no}: ${name} : ${email}` ```--> ```"".concat(no, ": ").concat(name, " : ").concat(email)```
    * [변환 결과](dist/ex01.03.js)

4. transpile : for-of (@babel/plugin-transform-for-of)

    ```bash
    npx babel src/ex01.js -o dist/ex01.04.js --plugins @babel/plugin-transform-for-of
    ```
    * ```for-of``` --> ```for(var i=0;i<~~;i++)```
    * [변환 결과](dist/ex01.04.js)

5. 모든 변환 적용

    ```bash
    npx babel src/ex01.js -o dist/ex01.all.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of
    ```
    * [변환 결과](dist/ex01.all.js)

## 결론
    
* preset 설치가 얼마나 중요한지 깨달음
    * preset 내에 여러 plugin들 있음