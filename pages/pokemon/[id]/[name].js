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
			image: undefined,
		};
	}

	componentDidMount() {
		const { pokemon_id } = this.state;
		this.getPokemon(pokemon_id);
	}

	getPokemon(pokemon_id) {
		PokemonHelper.getWithId(pokemon_id)
			.then((data) => {
				let image = undefined;
				if (data.sprites?.other["official-artwork"]?.front_default) {
					image =
						data.sprites?.other["official-artwork"].front_default;
				} else {
					image = data.sprites?.front_default;
				}
				this.setState({
					image: image,
					name: data.name,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { name, pokemon_id, image } = this.state;
		return (
			<GlobalWrapper pageTitle={name}>
				<div className={styles.wrapper}>
					<PokemonCard
						image={image}
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
