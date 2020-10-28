const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const { page = 1 } = request.query;

		const [count] = await connection('user_genre').count();

		const userGenre = await connection('user_genre')
			.limit(5)
			.offset((page -1) * 5);

		response.header('X-Total-Count', count['count(*)']);

		return response.json(userGenre);
	},

	async create(request, response) {
    const { userId, genreId } = request.body;

		const [ userGenreId ] = await connection('user_genre').insert({
      userId,
      genreId
		});

		return response.json({ userGenreId });
	},

	async delete(request, response) {
		const { userGenreId } = request.params;

		const userGenre = await connection('user_genre').where('userGenreId', userGenreId).select('userGenreId').first();

		if(userGenre.userGenreId !== userGenreId) {
			return response.status(401).json({ error: 'Operação não permitida.' });
		}

		await connection('userGenre').where('userGenreId', userGenreId).delete();

		return response.status(204).send();
	}
}