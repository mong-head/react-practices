# LifeCycle

## Class Component LifeCycle ([src/01/LifeCycle.js](src/01/LifeCycle.js))

1. Mount LifeCycle
    1) constructor
    2) getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react V16.3]
    3) render
    4) componentDidMount: Component 생성을 마치고 첫 Rendering 작업이 끝난 후!
2. Update LifeCycle
    1) getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react V16.3]
    2) shouldComponentUpdate: Component state, props이 변경이 되었을 때 실행
        - component 성능 최적화 관련 : 자꾸 rendering하면 안좋으니깐 변경될 때마다 rendering하게 함
        - return false : rendering X
    3) render
    4) getSnapshotBeforeUpdate : render method 호출 후,
    5) componentDidUpdate: DOM update 끝난 직후, DOM 작업 가능
3. Unmount LifeCycle
    - componentWillUnmount()

* ex 
    * 공부 예제 : [src/01](src/01)
        * 실행
            ```shell
            npm run debug src=01
            ```
    * 적용 예제 : [Clock src/03](src/03)
        * 실행
            ```shell
            npm run debug src=03
            ```
        * use constructor, componentDidMount, componentWillUnmount

## Function Component LifeCycle : Hook function

* LifeCycle 딱히 없고, Rendering(function component 본 기능) 전, 후에 useEffect,useRef,useState를 이용해서 lifecycle효과 냄
* Alternative
    * getDerivedStateFromProps
        ```js
	    const [boxColor, setBoxColor] = useState(color);
        
        // Alternative01 : getDerivedStateFromProps
        if (boxColor !== color) {
            setBoxColor(color);
        }
        ```
    * componentDidMount & componentWillUnmount
        ```js
        useEffect(() => {
            console.log("After Mount(componentDidMount)");
            return (function(){
                console.log("After Unmount(componentWillUnmount)");
            });
        },[]);
        ```

* After Rendering Function
    1. 모든 상태에 대한 변화
        - 상태 변화 -> rendering -> func
        - ```useEffect(() => {})```
        - 사용 거의 X
        - componentDidMount, componentDidUpdate
    2. 어떤 특정 값의 변화에 반응하는 After Rendering function
        - 어떤 특정 state value 변화 -> rendering -> func
        - 관심 분리 관련
        - 사용 多
        - ```useEffect(() => {},[boxColor])``` : boxColor state변경시에만 불러와짐

* ex : [src/02](src/02)
    * 실행
        ```shell
        npm run debug src=02
        ```

