import React from "react";

import styles from "../styles/index.module.css";

import GlobalWrapper from "../components/globalWrapper/globalWrapper";
import BigCard from "../components/bigCard/bigCard";
import PokemonCard from "../components/pokemonCard/pokemonCard";
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
							wrapperStyle={{
								marginTop: 20,
							}}
						/>
						<div className={styles.mediumItemWrapper}>
							<PokemonCard
								backgroundColor={"pink"}
								image={"/assets/sprites/113.png"}
								title={"Chansey"}
								subText={"#113"}
								pokemonId={"113"}
							/>
							<PokemonCard
								backgroundColor={"#89CFF0"}
								image={"/assets/sprites/007.png"}
								title={"Squirtle"}
								subText={"#007"}
								pokemonId={"007"}
							/>
							<PokemonCard
								backgroundColor={"#FCEF91"}
								image={"/assets/sprites/025.png"}
								title={"Pikachu"}
								subText={"#025"}
								pokemonId={"025"}
							/>
						</div>
					</div>
				</GlobalWrapper>
			</div>
		);
	}
}
