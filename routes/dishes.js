const express = require('express');
const { getDishes, postDish } = require('../controllers/dishes.controllers');

const router = express.Router();

router.get('/api/dishes', getDishes);

router.post('/api/dishes', postDish);

module.exports = router;
