import API from "../util/api";

const pokemon = {
	getWithId: (pokemon_id) =>
		new Promise(function (resolve, reject) {
			API.get("pokemon/" + pokemon_id)
				.then(async (res) => {
					if (res.status === 200) {
						resolve(res.data);
					} else {
						reject(res.data.msg);
					}
				})
				.catch((err) => {
					reject(err);
				});
		}),
};

export default pokemon;
