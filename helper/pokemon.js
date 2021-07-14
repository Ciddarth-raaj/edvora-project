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
		const formatted = {};

		formatted.name = data.name; //Pokemon Name
		if (data.sprites?.other["official-artwork"]?.front_default) {
			//Pokemon Sprite Image
			formatted.image =
				data.sprites?.other["official-artwork"].front_default;
		} else {
			formatted.image = data.sprites?.front_default;
		}

		formatted.types = []; //Initilise pokemon types array
		for (let f of data.types) {
			//Loop through the type and store in an easier format
			formatted.types.push(f.type.name);
		}

		return formatted;
	},
};

export default pokemon;
