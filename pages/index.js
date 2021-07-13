import React from "react";

// import Header from "../components/header/header";
// import Head from "../components/head";

import GlobalWrapper from "../components/globalWrapper/globalWrapper";
export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<GlobalWrapper
					pageTitle={"Home"}
					pageTag={"home"}
				></GlobalWrapper>
			</div>
		);
	}
}
