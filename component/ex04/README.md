# ex03: Component - React Event

## Learn What

### 01. basic

* state
    * component 내부의 현재 상태 나타내는 쓰기 가능한 data
        * class component : constructor에서 default값 setting으로 생성
            * component : this.state 안에 여러 data를 가질 수 있음
            * this.state : 특정 component 전용
                * 변경 : use setState()
        * function component
            * 변경 : useState라는 후크함수 사용해서 초기화
    * state 변경 : UI 다시 rendering
        * (:star:) state update -> Component Reactive Rendering : trigger -> rendering current component & child component 
        * component 내부 state 최소한으로 유지
        * component 내부 state를 외부에 정확히 나타내고 interface의 sync를 위해 다시 rendrering
    * component가 event와 상호작용을 수행할 수 있는 메커니즘 제공
        * state : 대체적으로 사용자 event로 변경되거나 통신으로 변경됨
    * Redux
        * component 밖에서 따로 state 관리

* ex : src/01

    ```bash
    npm run debug src=01
    ```

### 02. Controlled Component (Form Component)

* Controlled Component(제어 컴포넌트)
    * Form Component 中 사용자 입력에 따른 state 값 변경되고 rendering 하는 component
        
* Form Component
    * 종류 : ```<input>```, ```<textarea>```, ```<option>``` 등등
    * 반드시 Controlled Component 로 작성 X
    * Uncontrolled Component(Anti-Pattern)로 작성 가능

* Form Component -작성-> Controlled Component
    * 복잡함
    * 장점 多
        * React Component 작성 규칙 준수
            * component 의 interface를 외부에서 직접 변경 불가능 & 내부의 state 변경으로만 가능
        * Validation 가능
            * 사용자 입력값에 따른 체크 가능

* ex : [src/02](src/02), [src/02/Form.js](src/02/Form.js)

    ```bash
    npm run debug src=02
    ```

    * state example
        ```js
        import React, { useState } from 'react';

        export default function Form() {
            const [name,setName] = useState('');
            const onchangeInputName = function(e){
                    // validation
                    // 열자 이상 제한
                    setName(e.target.value.substr(0,10));
            }
            return (
                <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
                    <label htmlFor="name">이름</label>
                    <input id="name" name="name" type="text" value={ name } onChange={ onchangeInputName } />
                </form>
            );
        }
        ```
        * ```htmlFor``` : 밑의 ```<input>```에서 id 값 같은거에 대해 바로 focus가게 해줌

* 설치
    * Awesome Font(React) 
        * (필수)core 설치
            ```bash
            npm i @fortawesome/fontawesome-svg-core
            npm i @fortawesome/react-fontawesome
            ```
        * (선택)font 종류
            * icons
                * light : 유료
                * solid : 기본, 多 사용
                * regular
                * brand : Apple, Facebook mark등등 기업 폰트 적용
            ```bash
            npm i @fortawesome/free-solid-svg-icons
            npm i @fortawesome/free-regular-svg-icons
            npm i @fortawesome/free-brands-svg-icons
            ```

### 03. Uncontrolled Component (Anti-Pattern)

* validation 할 필요없는 경우 쓰긴 함

```js
export default function Form() {

    const onSubmit = function(e){
        e.preventDefault();
        console.log(e.target.email.value, e.target.password.value);
    }

    return (
        <form id="loginForm" name="joinForm" method="post" action="/do/not/post" onSubmit={ onSubmit } >
            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="가입" />
        </form>
    );
}
```

* ex : [src/03](src/03), [src/03/Form.js](src/03/Form.js)

    ```bash
    npm run debug src=03
    ```

### 04. Stateful Component VS Pure(Dumb) Component

* Application Component : Stateful Component, Pure Component 둘 중에 하나로 seperate하기
    * Stateful Component
        * state 관리
        * Component hierarchy에서 상위층에 있는 편(최상위 부모는 아니더라도 부모인 편)
        * Pure Component(state 관리 X)하나 이상 래핑할 수 있음
        * Stateful Component 될 만한 Compoenent
            * State 기반 Rendering하는 Component
            * 하위 Component 多 가진 Component
            * 상위 Component이고 state가지는 Component
            * 못찾는 경우 상태 관리하는 Component만들고 pure component 래핑하기
    * Pure Component
        * state X
            * Bussiness X : Data받은 것을 변화시키는 것이 X
        * property(위에서 내려온 속성)로 화면만 Rendering
        * 장점
            * ReUse Good
            * Test Good

* Class, Functional Component
    * Class Component
        * stateful
        * LifeCycle 존재
            * 자식, 부모관계 관련
            * mount, update, unmount
                * mount : Virtual DOM의 element들을 DOM에 처음 넣기
                * update : Virtual DOM의 element를 DOM에 수정
                * unmount : Virtual DOM의 element를 DOM에서 없애기

    * Function Component
        * pure
        * LifeCycle 존재 X
            * class 따라한다고 나온 것이 Hook function
                * mount, update, unmount 지원해줌 : useState, useRef, useEffect
                * 근데 조금 억지 부분 有 : 이미 잘 실행되는 것을 끌어올려서(hook) 사용
        * 본목적 : 화면 그리는 용도(rendering)로 사용
            * hook : rendering 전, 후(useEffect)에 할 것 해줌

### 05. Data Flow(Bottom-Up)

* Top-Down Data Flow : React Application 의 기본 props 전달 방향
* Bottom-Up Data Flow : 자식인 React Application이 data를 부모로 전달하는 경우가 반드시 있음

* ex : [src/04](src/04)

    * emaillist
        * props로 전달한 callback 함수 사용하는 방법

    ```bash
    npm run debug src=03
    ```

## Usage
```bash
$ npm run debug src={no}
```
* ex : ```npm run debug src=01```