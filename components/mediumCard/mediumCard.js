import React from "react";

import styles from "./mediumCard.module.css";

import { usePalette } from "react-palette";

export default function mediumCard(props) {
	const {
		backgroundImage,
		backgroundColor,
		title,
		subText,
		image,
		pokemonId,
		redirect,
	} = props;
	const { data } = usePalette(image);
	console.log(data);
	return (
		<div
			className={styles.card}
			style={{
				backgroundColor: backgroundColor || data.lightVibrant,
				cursor: redirect ? "pointer" : "unset",
			}}
			onClick={() =>
				redirect && (window.location = `/pokemon/${pokemonId}/${title}`)
			}
		>
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
