const { selectDishes } = require('../models/dishes.models');

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
  console.log(req);
};
