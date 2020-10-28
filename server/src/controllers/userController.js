const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const { page = 1 } = request.query;

		const [count] = await connection('users').count();

		const users = await connection('users')
			.limit(5)
			.offset((page -1) * 5);

		response.header('X-Total-Count', count['count(*)']);

		return response.json(users);
	},

	async create(request, response) {
    const { userName, mail, userBirth, instrument, state, city, hood, experience, goal } = request.body;

		const [ userId ] = await connection('users').insert({
      userName,
      mail,
      userBirth,
      instrument,
      state,
      city,
      hood,
      experience,
      goal
		});

		return response.json({ userId });
	},

	async delete(request, response) {
		const { userId } = request.params;

		const user = await connection('users').where('userId', userId).select('userId').first();

		if(user.userId !== userId) {
			return response.status(401).json({ error: 'Operação não permitida.' });
		}

		await connection('users').where('userId', userId).delete();

		return response.status(204).send();
	}
}