import React from "react";

import styles from "./bigCard.module.css";

export default class BigCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { backgroundImage, backgroundColor, title, subText } = this.props;
		return (
			<div className={styles.fullCard} style={{ backgroundColor }}>
				{backgroundImage && (
					<div className={styles.imageWrapper}>
						<span />
						<img src={backgroundImage} />
					</div>
				)}
				<div className={styles.contentWrapper}>
					<p className={styles.bigText}>{title}</p>
					<p className={styles.subText}>{subText}</p>
				</div>
			</div>
		);
	}
}
