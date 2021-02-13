exports.up = function(knex) {
  return knex.schema
    .createTable('thoughts', function (table) {
      table.bigInteger('thought_id').primary();
      table.string('text');
      table.date('date_sent').defaultTo(knex.fn.now());
      table.time('time_sent');
      table.bigInteger('message_id').notNullable()
        .references('message_id').inTable('messages').onDelete('cascade');
    })
};
    
exports.down = function(knex) {
  return knex.schema
    .dropTable('thoughts');
};
