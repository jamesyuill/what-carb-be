const mongoose = require('mongoose');
const Dish = require('./models/dishmodel');
const dishes = require('./data/dishList');
const connectDB = require('../connectMongo');

const mappedDishes = dishes.map((dish) => {
  let temp = new Dish({
    title: dish.title,
    carbType: dish.carbType,
    vegetarian: dish.vegetarian,
    ingredients: dish.ingredients,
  });
  return temp;
});

connectDB();

async function seedDishes(dishes) {
  await mongoose.connection.collection('dishes').deleteMany({});
  let done = 0;
  for (let i = 0; i < dishes.length; i++) {
    done++;
    await dishes[i].save();
  }

  if (done === dishes.length) {
    mongoose.disconnect();
  }
}

seedDishes(mappedDishes);
