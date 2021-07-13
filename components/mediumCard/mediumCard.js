import React from "react";

import styles from "./mediumCard.module.css";

export default class MediumCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { backgroundImage, backgroundColor, title, subText, image } =
			this.props;
		return (
			<div className={styles.fullCard} style={{ backgroundColor }}>
				{backgroundImage && (
					<div className={styles.imageWrapper}>
						<span />
						<img src={backgroundImage} />
					</div>
				)}
				<div className={styles.contentWrapper}>
					<img src={image} className={styles.spriteImage} />
					<p className={styles.bigText}>{title}</p>
					<p className={styles.subText}>{subText}</p>
				</div>
			</div>
		);
	}
}
