exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};