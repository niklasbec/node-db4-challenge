
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'butter'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'bread'},
        {id: 4, name: 'onion'},
        {id: 5, name: 'pickle'},
        {id: 6, name: 'cheese'},
        {id: 7, name: 'whipped cream'},
      ]);
    });
};
