import React from "react";

import styles from "../../../styles/pokemon-data.module.css";

import GlobalWrapper from "../../../components/globalWrapper/globalWrapper";
import PokemonCard from "../../../components/pokemonCard/pokemonCard";
import MediumCard from "../../../components/mediumCard/mediumCard";

import PokemonHelper from "../../../helper/pokemon";

export default class PokemonData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			pokemon_id: props.id,
			image: undefined,
			types: [],
			stats: [],
			weight: "",
			height: "",
		};
	}

	componentDidMount() {
		const { pokemon_id } = this.state;
		this.getPokemon(pokemon_id);
	}

	getPokemon(pokemon_id) {
		PokemonHelper.getWithId(pokemon_id)
			.then((data) => {
				this.setState({
					image: data.image,
					name: data.name,
					types: data.types,
					stats: data.stats,
					height: data.height,
					weight: data.weight,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { name, pokemon_id, image, types, stats, weight, height } =
			this.state;
		return (
			<GlobalWrapper pageTitle={name}>
				<div className={styles.wrapper}>
					<PokemonCard
						image={image}
						title={name}
						subText={`#${pokemon_id}`}
						pokemonId={pokemon_id}
					/>
					{types.map((t) => (
						<MediumCard image={image} title={t} subText={`Type`} />
					))}
					<MediumCard
						image={image}
						title={height}
						subText={"Height"}
					/>
					<MediumCard
						image={image}
						title={weight}
						subText={"Weight"}
					/>
					{stats.map((s) => (
						<MediumCard
							image={image}
							title={s.value}
							subText={s.type}
						/>
					))}
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
