import React from "react";

import styles from "./globalWrapper.module.css";

import Header from "../header/header";
import Head from "../head";

export default class GlobalWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { pageTitle, pageTag, children } = this.props;
		return (
			<div>
				<Head title={pageTitle} />
				<Header tag={pageTag} />
				<div className={styles.childDiv}>{children}</div>
			</div>
		);
	}
}
