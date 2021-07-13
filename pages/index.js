import React from "react";

import styles from "../styles/index.module.css";

import GlobalWrapper from "../components/globalWrapper/globalWrapper";
import BigCard from "../components/bigCard/bigCard";
export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<GlobalWrapper pageTitle={"Home"} pageTag={"home"}>
					<div className={styles.itemWrapper}>
						<BigCard
							backgroundImage={"./assets/backgrounds/forest.jpg"}
							title={"All in One"}
							subText={"Pokemon Browser"}
						/>
					</div>
				</GlobalWrapper>
			</div>
		);
	}
}
