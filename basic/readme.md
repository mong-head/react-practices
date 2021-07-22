# Basic

### CRA(create react app) 기반 applciation ([ex00](ex00))

#### 설치 & 프로젝트 만들기
    ```shell
    ## /react-practices
    npm i -g create-react-app
    ## /react-practices/basic
    npx create-react-app ex00
    ```

### 전통적인 DOM API 기반 Application ([ex01](ex01))

* module 분리 X
* index.js : DOM API 사용 작성

### applcation 분리 1 : 단순 분리([ex02](ex02))

* module 단순 분리 
    * import, export없이 index.html에 모듈들 적음
* dependency 관리 힘듦

### applcation 분리 2 : ES6 module system ([ex03](ex03))

* 모듈 분리 후, import, export를 이용해 의존성 관리 어느정도 가능
* 단점
    * 비효율적 : 개별적으로 import하는 것은 많은 모듈이 있을 때 관리가 힘듦
    * JS 에 대한 의존성뿐만 아니라 image,css등의 여러 assets에 대해서도 고려해야함
        * 요즘에는 assets들도 JS와 함께 묶어서 하나의 모듈로 생각하기 시작함

### applcation bundling : webpack ([ex04](ex04))

* webpack, bundling 개념
* webpack 설치 및 빌드 수행

### webpack practices([webpack-practices](webpack-practices))

* ex04에서 더 나아가 webpack에 대해 연습함

### React(API 기반) application refactoring ([ex05](ex05))

### React(JSX 기반) application refactoring : babel(transpile) ([ex06](ex06))

### React 기본 개념 ([ex07](ex08))