import React from "react";

import styles from "../styles/index.module.css";

import GlobalWrapper from "../components/globalWrapper/globalWrapper";
import BigCard from "../components/bigCard/bigCard";
import MediumCard from "../components/mediumCard/mediumCard";
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
							wrapperStyle={{ marginBottom: 50, marginTop: 20 }}
						/>
						<div className={styles.mediumItemWrapper}>
							<MediumCard
								backgroundColor={"pink"}
								image={"./assets/sprites/113.png"}
								title={"Chansey"}
								subText={"#Trending"}
							/>
							<MediumCard
								backgroundColor={"#89CFF0"}
								image={"./assets/sprites/007.png"}
								title={"Squirtle"}
								subText={"#Water Type"}
							/>
							<MediumCard
								backgroundColor={"#FCEF91"}
								image={"./assets/sprites/025.png"}
								title={"Pikachu"}
								subText={"#Cute"}
							/>
						</div>
					</div>
				</GlobalWrapper>
			</div>
		);
	}
}
