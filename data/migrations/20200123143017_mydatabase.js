exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('name', 128)
          .unique()
          .notNullable();
      })
      .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
        tbl.integer('step_number')
          .notNullable();
        tbl.text('instructions')
          .notNullable();
      })
      .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.text('name', 128)
          .unique()
          .notNullable()
      })
      .createTable('ingredients_needed', tbl => {
        tbl.increments()
        tbl.integer('recipe_id')
          .notNullable()
          .references('id')
          .inTable('recipes')
        tbl.integer('ingredient_id')
          .notNullable()
          .references('id')
          .inTable('ingredients')
        tbl.float('ingredient_quantity')
          .notNullable()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('instructions')
      .dropTableIfExists('ingredients_needed');
  };