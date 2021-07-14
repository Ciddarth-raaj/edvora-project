import React from "react";

import styles from "../styles/list.module.css";

import GlobalWrapper from "../components/globalWrapper/globalWrapper";
import PokemonCard from "../components/pokemonCard/pokemonCard";

import PokemonHelper from "../helper/pokemon";

const ITEM_LIMIT = 21;

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon_list: [],
			offset: 0,
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.trackScrolling);

		this.getPokemon();
	}

	getPokemon() {
		const { offset, pokemon_list } = this.state;
		this.setState({ offset: offset + ITEM_LIMIT });
		PokemonHelper.getAll(offset, ITEM_LIMIT)
			.then((data) => {
				this.setState({ pokemon_list: [...pokemon_list, ...data] });
			})
			.catch((err) => console.log(err));
	}

	trackScrolling = () => {
		const { offset, pokemon_list } = this.state;
		const wrappedElement = document.getElementById("mainWindow");
		if (this.isBottom(wrappedElement) && offset <= pokemon_list.length) {
			this.getPokemon();
		}
	};

	isBottom = (el) => {
		return el.getBoundingClientRect().bottom <= window.innerHeight;
	};

	render() {
		const { pokemon_list } = this.state;
		return (
			<div>
				<GlobalWrapper pageTitle={"List"} pageTag={"list"}>
					<div className={styles.mediumItemWrapper} id={"mainWindow"}>
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
