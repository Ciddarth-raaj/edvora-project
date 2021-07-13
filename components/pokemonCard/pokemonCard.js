import React from "react";

import styles from "./pokemonCard.module.css";

import { usePalette } from "react-palette";

export default function pokemonCard(props) {
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
				{image && <img src={image} className={styles.spriteImage} />}
				<p className={styles.bigText}>{title}</p>
				<p className={styles.subText}>{subText}</p>
			</div>
		</div>
	);
}
