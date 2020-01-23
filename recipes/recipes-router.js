const express = require('express');

const R = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  R.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shoppingList' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  R.getShoppingList(id)
  .then(shoppingList => {
    if (shoppingList) {
      res.json(shoppingList);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shoppinglist' });
  });
});


router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  R.getInstructions(id)
  .then(instructions => {
    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find instructions for given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get instructions' });
  });
});

module.exports = router;