exports.up = function(knex) {
  return knex.schema
    .createTable('conversations', function (table) {
      table.integer('conversation_id').primary();
      table.string('title');
      table.date('start_date').defaultTo(knex.fn.now());
    }) 
}
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('conversations'); 
  };
