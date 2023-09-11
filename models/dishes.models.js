const Dish = require('../db/seed/models/dishmodel');

exports.selectDishes = async (vegetarian, carbType) => {
  carbType = carbType.charAt(0).toUpperCase() + carbType.slice(1);
  if (vegetarian) {
    try {
      const dishes = await Dish.find({ vegetarian, carbType });
      return dishes;
    } catch (error) {
      return next(error);
    }
  } else {
    try {
      const dishes = await Dish.find({ carbType });
      return dishes;
    } catch (error) {
      return next(error);
    }
  }
};

exports.addDish = async (newDish) => {
  try {
    const dishToAdd = new Dish(newDish);
    const result = await dishToAdd.save();
    return result;
  } catch (error) {
    return next(error);
  }
};

exports.removeDishById = async (id) => {
  try {
    const result = await Dish.findByIdAndDelete({ _id: id });

    return result;
  } catch (error) {
    return next(error);
  }
};

exports.editDishById = async (id, update) => {
  try {
    const result = await Dish.findByIdAndUpdate({ _id: id }, update);
    return result;
  } catch (error) {
    return next(error);
  }
};
