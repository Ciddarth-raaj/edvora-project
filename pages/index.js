import React from "react";

import Header from "../components/header/header";
import Head from "../components/head";
export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{ backgroundColor: "black", height: 100 }}>
				<Head />
				<Header />
			</div>
		);
	}
}
