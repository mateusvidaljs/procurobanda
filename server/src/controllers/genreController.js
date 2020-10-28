const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const { page = 1 } = request.query;

		const [count] = await connection('genre').count();

		const incidents = await connection('genre')
			.limit(5)
			.offset((page -1) * 5);

		response.header('X-Total-Count', count['count(*)']);

		return response.json(incidents);
	},

	async create(request, response) {
		const { name, icon } = request.body;

		const [ genreId ] = await connection('genre').insert({
      name,
      icon
		});

		return response.json({ genreId });
	},

	async delete(request, response) {
		const { genreId } = request.params;

		const genre = await connection('genre').where('genreId', genreId).select('genreId').first();

		if(genre.genreId !== genreId) {
			return response.status(401).json({ error: 'Operação não permitida.' });
		}

		await connection('genre').where('genreId', genreId).delete();

		return response.status(204).send();
	}
}