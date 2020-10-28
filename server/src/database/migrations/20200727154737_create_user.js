
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('userId').primary();
    table.string('userName', 200).notNullable();
    table.string('mail', 255).notNullable();
    table.date('userBirth').notNullable();
    table.string('instrument', 30).notNullable();
    table.string('state', 2).notNullable();
    table.string('city', 80).notNullable();
    table.string('hood', 100).notNullable();
    table.integer('experience').notNullable();
    table.string('goal', 1).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
