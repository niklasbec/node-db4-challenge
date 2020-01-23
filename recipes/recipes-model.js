const db = require('../data/db-config')

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('ingredients_needed').where({recipe_id: id})
}

function getInstructions(id) {
    return db('instructions').where({recipe_id: id})
}
// function add({scheme_name}) {
//     return db('schemes')
//         .insert({scheme_name})
// }

// function remove(id) {
//     return db('schemes').where({id}).del()
// }

// function findSteps(id) {
//     return db('steps').where({ id })
//   }

//   function update(changes, id) {
//     return db("schemes")
//       .where({ id: id })
//       .update(changes);
//   }

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  }