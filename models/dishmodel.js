import mongoose, { Schema } from 'mongoose';

const dishSchema = new Schema({
  title: String,
  carbType: String,
  vegetarian: Boolean,
  ingredients: Array,
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;
