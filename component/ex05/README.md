# LifeCycle

## Class Component LifeCycle ([src/01/LifeCycle.js](src/01/LifeCycle.js))

1. Mount LifeCycle
    - 1) constructor
    - 2) getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react V16.3]
    - 3) render
    - 4) componentDidMount: Component 생성을 마치고 첫 Rendering 작업이 끝난 후!
2. Update LifeCycle
    - 1) getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react V16.3]
    - 2) shouldComponentUpdate: Component state, props이 변경이 되었을 때 실행
        - component 성능 최적화 관련 : 자꾸 rendering하면 안좋으니깐 변경될 때마다 rendering하게 함
        - return false : rendering X
    - 3) render
    - 4) getSnapshotBeforeUpdate : render method 호출 후,
    - 5) componentDidUpdate: DOM update 끝난 직후, DOM 작업 가능
3. Unmount LifeCycle
    - componentWillUnmount()

* ex : [src/01](src/01)

## Function Component LifeCycle

* LifeCycle 딱히 없고, Rendering(function component 본 기능) 전, 후에 useEffect,useRef,useState를 이용해서 lifecycle효과 냄

* Alternative