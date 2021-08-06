import React, { Fragment, useRef, useState, useEffect } from "react";

export default function Hook({ color }) {
	const [boxColor, setBoxColor] = useState(color);
	const h3Ref = useRef(null);
    const [title, setTitle] = useState('');

	// Alternative01 : getDerivedStateFromProps
	if (boxColor !== color) {
		setBoxColor(color);
	}
	console.log("----->", boxColor, ":", color);

	/**
	 * After Rendring function( state 변화 -> rendering -> function )
	 *  - Class Component LifeCycle(componentDidMount,componentDidUpdate )
     *  - 거의 안씀
	 */
	useEffect(() => {
		console.log("ALL : After Rendering");
	});

    /**
     * After Rendering Function : 특정 상태값 변화에만 반응
     *  - 관심 분리
     *  - 많이 사용
     *  - 내 예제 : boxColor 변화했을 때만 불러지도록 함
     */
    useEffect(() => {
		console.log("Update Color(DB) Using API");
	},[boxColor]);

    /**
     * Alternative : componentDidMount & componentWillUnmount
     */
    useEffect(() => {
		console.log("After Mount(componentDidMount)");
        return (function(){
		    console.log("After Unmount(componentWillUnmount)");
        });
	},[]);

	return (
		<Fragment>
			<h3
				style={{
					width: 300,
					height: 50,
					backgroundColor: boxColor,
				}}
				ref={h3Ref}
			/>
			<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
		</Fragment>
	);
}
