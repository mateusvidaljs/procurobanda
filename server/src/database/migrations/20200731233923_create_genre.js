exports.up = function(knex) {
  return knex.schema.createTable('genre', (table) => {
    table.increments('genreId').primary();
    table.string('name', 100).notNullable();
    table.text('icon').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('genre');
};
