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
