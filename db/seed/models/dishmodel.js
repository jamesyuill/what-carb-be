const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  carbType: {
    type: String,
    required: true,
  },
  vegetarian: {
    type: Boolean,
    required: true,
  },
  ingredients: Array,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
