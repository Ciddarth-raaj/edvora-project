import React from "react";

import styles from "../../../styles/pokemon-data.module.css";

import GlobalWrapper from "../../../components/globalWrapper/globalWrapper";
import PokemonCard from "../../../components/pokemonCard/pokemonCard";

import PokemonHelper from "../../../helper/pokemon";

export default class PokemonData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			pokemon_id: props.id,
		};
	}

	componentDidMount() {
		const { pokemon_id } = this.state;
		this.getPokemon(pokemon_id);
	}

	getPokemon(pokemon_id) {
		PokemonHelper.getWithId(pokemon_id)
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	}

	render() {
		const { name, pokemon_id } = this.state;
		return (
			<GlobalWrapper pageTitle={name}>
				<div className={styles.wrapper}>
					<PokemonCard
						backgroundColor={"pink"}
						image={"/assets/sprites/113.png"}
						title={name}
						subText={`#${pokemon_id}`}
						pokemonId={pokemon_id}
					/>
				</div>
			</GlobalWrapper>
		);
	}
}

export async function getServerSideProps(context) {
	return {
		props: { ...context.params },
	};
}
