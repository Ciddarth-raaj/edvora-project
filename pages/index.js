import React from "react";

import styles from "../styles/index.module.css";

import GlobalWrapper from "../components/globalWrapper/globalWrapper";
import BigCard from "../components/bigCard/bigCard";
import PokemonCard from "../components/pokemonCard/pokemonCard";

import PokemonHelper from "../helper/pokemon";

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon_list: [],
		};
	}

	componentDidMount() {
		this.getPokemon();
	}

	getPokemon() {
		PokemonHelper.getMany([12, 43, 71, 64, 163, 184])
			.then((data) => {
				this.setState({ pokemon_list: data });
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { pokemon_list } = this.state;
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
							{pokemon_list.map((p) => (
								<PokemonCard
									image={p.image}
									title={p.name}
									subText={`#${p.pokemon_id}`}
									pokemonId={p.pokemon_id}
									redirect={true}
								/>
							))}
						</div>
					</div>
				</GlobalWrapper>
			</div>
		);
	}
}
