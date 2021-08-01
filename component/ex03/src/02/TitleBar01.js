import React, { Component } from "react";

// Class Component

export default class TitleBar01 extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			no: 10,
		};
	}
	onClickHeader(e) {
		this.no++;
		console.log("click!", this.state.no);
		this.setState({
			no: this.state.no + 1,
		});
	}
	render() {
		return (
			<h1
				onClick={this.onClickHeader.bind(this)}
				style={{
					cursor: "pointer",
				}}
			>
				ex03 - Functional Handler(Class Component) {this.state.no}
			</h1>
		);
	}
}
