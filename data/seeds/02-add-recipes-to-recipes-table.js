
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, name: 'Cheese Cake'},
        {id: 2, name: 'Chicken Parma'},
        {id: 3, name: 'Spagetthi'},
        {id: 4, name: 'I dont know does anyone even read these?'}
      ]);
    });
};