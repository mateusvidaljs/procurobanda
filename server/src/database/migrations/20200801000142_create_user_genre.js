
exports.up = function(knex) {
  return knex.schema.createTable('user_genre', (table) => {
    table.increments('userGenreId').primary();
    table.integer('userId').unsigned();
    table.integer('genreId').unsigned();
    table.foreign('userId').references('user.userId');
    table.foreign('genreId').references('genre.genreId');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_genre');
};
