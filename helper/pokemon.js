import API from "../util/api";

const pokemon = {
	getWithId: (pokemon_id) =>
		new Promise(function (resolve, reject) {
			API.get("pokemon/" + pokemon_id)
				.then(async (res) => {
					if (res.status === 200) {
						resolve(pokemon.format(res.data));
					} else {
						reject(res.data.msg);
					}
				})
				.catch((err) => {
					reject(err);
				});
		}),
	format: (data) => {
		let image = undefined;
		if (data.sprites?.other["official-artwork"]?.front_default) {
			//Pokemon Sprite Image
			image = data.sprites?.other["official-artwork"].front_default;
		} else {
			image = data.sprites?.front_default;
		}

		const types = []; //Initilise pokemon types array

		for (let f of data.types) {
			//Loop through the type and store in an easier format
			types.push(f.type.name);
		}

		const stats = []; //Initalise pokemon stats array

		for (let s of data.stats) {
			//Loop through the stats and store in an easier format
			stats.push({
				value: s.base_stat,
				type: s.stat.name.replace("-", " "),
			});
		}

		const formatted = {
			name: data.name,
			image: image,
			types: types,
			stats: stats,
			weight: data.weight,
			height: data.weight,
		};

		return formatted;
	},
};

export default pokemon;
