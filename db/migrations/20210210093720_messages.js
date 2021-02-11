exports.up = function(knex) {
  return knex.schema
    .createTable('messages', function (table) {
      table.integer('message_id').primary();
      table.string('text');
      table.date('date_sent').defaultTo(knex.fn.now());
      table.time('time_sent');
      table.integer('conversation_id').notNullable()
        .references('conversation_id').inTable('conversations').onDelete('cascade');
    })
};
  
exports.down = function(knex) {
  return knex.schema
    .dropTable('messages');
};