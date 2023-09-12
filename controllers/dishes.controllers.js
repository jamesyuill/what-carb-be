const {
  selectDishes,
  addDish,
  removeDishById,
  editDishById,
} = require('../models/dishes.models');

exports.getDishes = async (req, res) => {
  const { vegetarian, carbType } = req.query;

  try {
    const dishes = await selectDishes(vegetarian, carbType);
    res.status(200).send({ dishes });
  } catch (error) {
    return res.status(500).send({ msg: 'Server Error' });
  }
};

exports.postDish = async (req, res) => {
  const newDish = req.body;

  try {
    const addedDish = await addDish(newDish);
    res.status(201).send({ addedDish });
  } catch (error) {
    return res.status(500).send({ msg: 'Server Error' });
  }
};

exports.deleteDishById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDish = await removeDishById(id);
    res.status(202).send({ deletedDish });
  } catch (error) {
    return res.status(500).send({ msg: 'Server Error' });
  }
};

exports.updateDishById = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const updatedDish = await editDishById(id, update);
    res.status(201).send({ updatedDish });
  } catch (error) {
    return res.status(500).send({ msg: 'Server Error' });
  }
};
