exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_needed').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_needed').insert([
        {id: 1, recipe_id: 1, ingredient_id: 2, ingredient_quantity: 2},
        {id: 2, recipe_id: 1, ingredient_id: 1, ingredient_quantity: 2},
        {id: 3, recipe_id: 1, ingredient_id: 3, ingredient_quantity: 2},

        {id: 4, recipe_id: 2, ingredient_id: 2, ingredient_quantity: 2},
        {id: 5, recipe_id: 2, ingredient_id: 1, ingredient_quantity: 2},
        {id: 6, recipe_id: 2, ingredient_id: 3, ingredient_quantity: 2},

        {id: 7, recipe_id: 3, ingredient_id: 3, ingredient_quantity: 2},
        {id: 8, recipe_id: 3, ingredient_id: 4, ingredient_quantity: 2},
        {id: 9, recipe_id: 3, ingredient_id: 5, ingredient_quantity: 2},

        {id: 10, recipe_id: 4, ingredient_id: 1, ingredient_quantity: 2},
        {id: 11, recipe_id: 4, ingredient_id: 5, ingredient_quantity: 2},
        {id: 12, recipe_id: 4, ingredient_id: 6, ingredient_quantity: 2},
      ]);
    });
};