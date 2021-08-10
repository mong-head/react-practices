## Immutability of Component's State: 컴포넌트 상태 변화의 불변성

### 기본 개념
1. 절대로 컴포넌트의 상태를 직접적으로 변화 시켜서는 안된다.
2. 컴포넌트의 상태는 불변적으로 다루어야 한다.
3. 항상 setState, useState Hook function 호출에서 반환하는 setter를 사용한다.

### Reason
1. 직접적으로 this.state 변경시 React State 관리 우회
    * React 원리 어기는 것, application 오작동 가능
2. this.state를 직접 조작한 내용은 this.setState 호출로 무효화됨
3. 나중에 성능 개선의 여지가 없다
    * 객체 변경 유무 검사 시 객체의 동질성 비교 -> 고비용
    * 객체 변경 유무 검사 시 객체의 동일성 비교 -> 저비용
4. 변경하지 말고 교체하기
5. 함수형 프로그래밍을 지원하는 자바스크립트에서는 4번 내용이 표준이 아니다.
    * 의도치 않게 변경 가능

### Violation Example
```js
this.setState({
    emails: [{},{},{}]
})

const emails = this.state.emails;
emails.push({});
```
### Good Example
```js
this.setState({
    emails: [...this.state.emails, {}]
})
```

### How 1
1. 비파괴 배열 method & operator : map, filter, concat, ...(spread)
2. src/01

### How 2
1. Object.assign : 변경이 적용된 새로운 객체 생성
2. src/02

### How3
1. Nested Object(```{{}}```)인 경우, How1,2는 까다로움
    - Object.assign은 deep copy X
    - deep clone : 고비용
    - 직접 : 관리 어려움, 코드 실수 가능
    - src/03
2. JS 언어적 특징으로 불가능
3. React Addon에 복잡하고 중첩된 객체의 변경을 도와주는 immutality helper 사용
    - src/04
    - 사용 : react-addons-update
    ```js
    import update from 'react-addons-update';

    const newObject = update(ObjectInState, {[WHERE]: {[WHAT]: updateValue}});
    ```
    - what 명령
        - $push :star: : 배열 요소 추가
        - $splice
        - $unsift
        - $set :star: : 속성 변경
        - $merge
        - $apply


## Project

* 생성 & 설치
    ```shell
    npm init -y

    npm i react-addons-update
    ```
* scripts
    ```json
    "type": "module",
    ```