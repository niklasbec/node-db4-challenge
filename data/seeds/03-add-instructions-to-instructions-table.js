
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step_number: 1, instructions: 'Just do it yourself'},
        {id: 2, recipe_id: 2, step_number: 1, instructions: 'Just do it yourself'},
        {id: 3, recipe_id: 3, step_number: 1, instructions: 'Just do it yourself'},
        {id: 4, recipe_id: 4, step_number: 1, instructions: 'Just do it yourself'},
        {id: 5, recipe_id: 1, step_number: 2, instructions: 'Just do it yourself 2'},
        {id: 6, recipe_id: 2, step_number: 2, instructions: 'Just do it yourself 2'},
        {id: 7, recipe_id: 3, step_number: 2, instructions: 'Just do it yourself 2'},
        {id: 8, recipe_id: 4, step_number: 2, instructions: 'Just do it yourself 2'}
      ]);
    });
};
