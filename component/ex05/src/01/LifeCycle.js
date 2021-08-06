import React, { Component, useState } from 'react';

export default class LifeCycle extends Component {
	constructor() {
		super(...arguments);
        this.h3Ref = null;
		this.state = {
			color: "#000",
		};
		console.log("[MOUINT01]: Constructor");
	}

	/**
	 * props로 받아온 값을 state에 동기화함 [react V16.3]
	 */
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log(
			`[MOUNT02][UPDATE01]: getDerivedStateFromProps(${nextProps}, ${prevState})`
		);
		return nextProps.color !== prevState.color
			? { color: nextProps.color }
			: null;
	}

	/**
	 * state이 변경되었을 때, re-rendering 여부 결정
	 * current data : this.props, this.state
	 * 변경될 data : nextProps, nextState
	 *
	 * component 성능 최적화에 사용
	 */
	shouldComponentUpdate(nextProps, nextStat) {
		console.log(
			`[UPDATE02]: shouldComponentUpdate(nextProps=${nextProps},nextStat=${nextStat})`
		);
		this.props;
		this.state;
		return true; // rendering
	}

	render() {
		console.log(`[MOUNT03][UPDATE03]: render()`);
		return (
			<h3
				style={{
					width: 300,
					height: 50,
					backgroundColor: this.state.color,
				}}
                ref={ ref => this.h3Ref = ref }
			/>
		);
	}

	/**
	 * render method 호출 직후, DOM에 변화를 반영하기 직전에 호출[v16.3]
	 * 반환 값은 다음 method componeneDidUpdate()의 세 번째 parameter snapshot로 전달
     * 변경 전의 props, state 접근 가능
     * 주로 업데이트 직전의 값을 참고해서 할 일이 있을 때 overriding
	 */
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(`[UPDATE04]: getSnapshotBeforeUpdate(prevProps=${prevProps.color}, prevState=${prevState.color})`);
		return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor : null;
	}

	/**
	 * DOM 업데이트가 끝난 직 후, DOM 작업이 가능하다.
	 * 변경 전의 props, state 접근이 가능하다.
	 */
	componentDidUpdate(prevProps, prevState, snapshot) {
        //const hexColor = 
        // "10","20","30" -> [10,20,30] -> reduce('#' -> '#0a' -> '#0af5' -> '#0af5ee')
		console.log(`[UPDATE05]: ComponentDidUpdate(prevProps=${prevProps.color}, prevState=${prevState.color},snapshot=${snapshot})`);
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

	componentDidMount() {
		console.log(`[MOUNT04]: ComponentDidMount()`);
	}

    /**
     * component를 DOM에서 제거할 때
     * componentDidMount에서 등록한 event, timer 직접 생성한 DOM Element 제거 (Clean-Up)
     */
    componentWillUnmount() {
		console.log(`[UNMOUNT]: ComponentDidUnmount()`);
	}
}