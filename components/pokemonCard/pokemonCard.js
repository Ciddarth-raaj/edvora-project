import React from "react";

import styles from "./pokemonCard.module.css";

export default class PokemonCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { backgroundImage, backgroundColor, title, subText, image } =
			this.props;
		return (
			<div className={styles.card} style={{ backgroundColor }}>
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
