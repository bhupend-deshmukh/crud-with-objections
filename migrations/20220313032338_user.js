exports.up = function(knex) {
  return knex.schema.createTable("user", table=>{
    table.increments("id").primary();
    table.string("name").notNullable().unique();
    table.integer("age").notNullable();
    table.string("gender").notNullable();
  });
};
 
  
exports.down = function(knex) {
  return knex.schema.dropTable("user");
};  