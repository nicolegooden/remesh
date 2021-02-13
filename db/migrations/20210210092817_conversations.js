exports.up = function(knex) {
  return knex.schema
    .createTable('conversations', function (table) {
      table.bigInteger('conversation_id').primary();
      table.string('title');
      table.string('start_date').defaultTo(knex.fn.now());
    }) 
}
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('conversations'); 
  };
