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

* ex : src/03

    ```bash
    npm run debug src=03
    ```

### 04. Stateful Component VS Pure(Dumb) Component

### 05. Data Flow(Bottom-Up)

## Usage
```bash
$ npm run debug src={no}
```
* ex : ```npm run debug src=01```