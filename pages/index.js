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
								image={"/assets/sprites/113.png"}
								title={"Chansey"}
								subText={"#113"}
								pokemonId={"113"}
								redirect={true}
							/>
							<PokemonCard
								image={"/assets/sprites/007.png"}
								title={"Squirtle"}
								subText={"#007"}
								pokemonId={"7"}
								redirect={true}
							/>
							<PokemonCard
								image={"/assets/sprites/025.png"}
								title={"Pikachu"}
								subText={"#025"}
								pokemonId={"25"}
								redirect={true}
							/>
						</div>
					</div>
				</GlobalWrapper>
			</div>
		);
	}
}
