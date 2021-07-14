import React from "react";

import styles from "../styles/list.module.css";

import GlobalWrapper from "../components/globalWrapper/globalWrapper";
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
		PokemonHelper.getAll(0, 21)
			.then((data) => {
				this.setState({ pokemon_list: data });
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { pokemon_list } = this.state;
		return (
			<div>
				<GlobalWrapper pageTitle={"List"} pageTag={"list"}>
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
				</GlobalWrapper>
			</div>
		);
	}
}
