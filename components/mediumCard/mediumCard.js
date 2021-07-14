import React from "react";

import styles from "./mediumCard.module.css";
import TYPE_IMAGE from "../../constants/type-images";

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
	return (
		<div
			className={styles.card}
			style={{
				backgroundColor: backgroundColor || data.darkVibrant,
				cursor: redirect ? "pointer" : "unset",
			}}
			onClick={() =>
				redirect && (window.location = `/pokemon/${pokemonId}/${title}`)
			}
		>
			{(backgroundImage || TYPE_IMAGE[title]) && (
				<div className={styles.imageWrapper}>
					<span />
					<img src={backgroundImage || TYPE_IMAGE[title]} />
				</div>
			)}
			<div className={styles.contentWrapper}>
				<p className={styles.bigText}>{title}</p>
				<p className={styles.subText}>{subText}</p>
			</div>
		</div>
	);
}
