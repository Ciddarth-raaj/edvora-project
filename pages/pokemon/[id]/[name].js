import React from "react";

import styles from "../../../styles/pokemon-data.module.css";

import GlobalWrapper from "../../../components/globalWrapper/globalWrapper";

export default class PokemonData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <GlobalWrapper></GlobalWrapper>;
	}
}
