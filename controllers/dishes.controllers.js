const { selectDishes, addDish } = require('../models/dishes.models');

exports.getDishes = async (req, res) => {
  const { vegetarian, carbType } = req.query;

  try {
    const dishes = await selectDishes(vegetarian, carbType);
    res.status(200).send({ dishes });
  } catch (error) {
    return next(error);
  }
};

exports.postDish = async (req, res) => {
  const newDish = req.body;

  try {
    const addedDish = await addDish(newDish);
    res.status(201).send({ addedDish });
  } catch (error) {
    return next(error);
  }
};
