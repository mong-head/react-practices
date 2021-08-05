import React, { Component, useState } from 'react';

export default class LifeCycle extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            color: '#000'
        }
        console.log('[MOUINT01]: Constructor');
    }

    /**
     * props로 받아온 값을 state에 동기화함 [react V16.3]
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`[MOUNT02][UPDATE01]: getDerivedStateFromProps(${nextProps}, ${prevState})`);
        return nextProps.color !== prevState.color ? { color : nextProps.color } : null;
    }

    render() {
        console.log(`[MOUNT03][UPDATE03]: render()`)
        return (
            <h3 style={{
                width: 300,
                height: 50,
                backgroundColor: this.state.color
            }} />
        );
    }

    /**
     * Component 생성을 마치고 첫 Rendering 작업이 끝난 후!
     * 
     * 가능
     *  - [다른 JS Library] or [call Framework Function]
     *  - 1. 이벤트 등록
     *  - 2. timer 설정
     *  - 3. network 통신
     */
    static componentDidMount(){
        console.log(`[MOUNT04]: ComponentDidMount()`);
    }
}