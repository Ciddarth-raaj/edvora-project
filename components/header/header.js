import React from "react";

import styles from "./header.module.css";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: {
				home: {
					title: "Home",
					link: "/",
					selected: true,
				},
				list: {
					title: "List",
					link: "/",
					selected: false,
				},
			},
		};
	}

	render() {
		const { menu } = this.state;
		return (
			<div className={styles.wrapper}>
				<img
					src={"./assets/logo/main-logo.png"}
					className={styles.logo}
				/>

				<div className={styles.menuList}>
					{Object.keys(menu).map((m) => (
						<a
							className={menu[m].selected && styles.selected}
							href={menu[m].link}
						>
							{menu[m].title}
						</a>
					))}
				</div>
			</div>
		);
	}
}
