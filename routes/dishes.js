const express = require('express');
const {
  getDishes,
  postDish,
  deleteDish,
  deleteDishById,
  updateDishById,
} = require('../controllers/dishes.controllers');

const router = express.Router();

router.get('/api/dishes', getDishes);

router.post('/api/dishes', postDish);

router.delete('/api/dishes/:id', deleteDishById);

router.patch('/api/dishes/:id', updateDishById);

module.exports = router;
