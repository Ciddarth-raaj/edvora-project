import React from "react";

import styles from "../../../styles/pokemon-data.module.css";

import GlobalWrapper from "../../../components/globalWrapper/globalWrapper";

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
		const { name } = this.state;
		return <GlobalWrapper pageTitle={name}></GlobalWrapper>;
	}
}

export async function getServerSideProps(context) {
	return {
		props: { ...context.params },
	};
}
