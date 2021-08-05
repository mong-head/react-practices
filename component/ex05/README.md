# LifeCycle

## Class Component LifeCycle

1. Mount LifeCycle
    - constructor
    - getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react V16.3]
    - render
    - componentDidMount: Component 생성을 마치고 첫 Rendering 작업이 끝난 후!
2. Update LifeCycle
    - getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다.[react V16.3]
3. Unmount LifeCycle

* ex : [src/01](src/01)

## Function Component LifeCycle

* LifeCycle 딱히 없고, Rendering(function component 본 기능) 전, 후에 useEffect,useRef,useState를 이용해서 lifecycle효과 냄

* Alternative