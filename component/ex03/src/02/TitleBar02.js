import React, { useState } from "react";

// Function Component

export default function TitleBar02() {
	let no = 10;
	// {no} = useState();      // useState : hook function
	const onClickHeader = (e) => {
		console.log("click!");
	};
	return (
		<h1
			onClick={onClickHeader}
			style={{
				cursor: "pointer",
			}}
		>
			ex03 - Functional Handler(Functional Component)
		</h1>
	);
}
