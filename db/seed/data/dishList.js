// {title: ,
// carbType: ,
// vegetarian: ,
// ingredients: [],}

const dishes = [
  {
    title: 'Pesto Pasta',
    carbType: 'Pasta',
    vegetarian: true,
    ingredients: ['Pasta', 'Green or Red Pesto'],
  },

  {
    title: 'Spaghetti Bolognase',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: ['Pasta', 'Beef', 'Tomatoes', 'Celery', 'Carrots'],
  },
  {
    title: 'Sneaky Veggie Pasta',
    carbType: 'Pasta',
    vegetarian: true,
    ingredients: ['Pasta', 'Tomatoes', 'Aubergine', 'Red Pepper', 'Garlic'],
  },
  {
    title: 'Bacon & Courgette Pasta',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: ['Pasta', 'Bacon', 'Courgette', 'Tomato Puree', 'Wine'],
  },
  {
    title: 'Chicken Curry',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Chicken', 'Onion'],
  },
  {
    title: 'Veggie Stir Fry',
    carbType: 'Rice',
    vegetarian: true,
    ingredients: ['Rice', 'Pepper', 'Mini corn', 'Broccoli'],
  },
  {
    title: 'Sausage & Mash',
    carbType: 'Potato',
    vegetarian: false,
    ingredients: ['Potato', 'Sausage', 'Brocolli'],
  },
  {
    title: 'Lamb Kofte with Cous Cous',
    carbType: 'Cous Cous',
    vegetarian: false,
    ingredients: ['Cous Cous', 'Lamb Mince', 'Tomato', 'Green Beans'],
  },
  {
    title: 'Dan Dan Noodles',
    carbType: 'Noodles',
    vegetarian: false,
    ingredients: ['Pork Mince', 'Noodles', 'Spring Onion', 'Ginger', 'Garlic'],
  },

  {
    title: 'Chilli Sin Carne Wraps',
    carbType: 'Tortilla',
    vegetarian: true,
    ingredients: ['Tortilla', 'Avocado', 'Kidney Beans', 'Onion', 'Cheese'],
  },
];

//   new Dish('Pasta La Mafia', 'Pasta', false, ['Pasta', 'Ham', 'Tomatoes']),
//   new Dish('Spaghetti & Meatballs', 'Pasta', false, [
//     'Pasta',
//     'Beef',
//     'Tomatoes',
//     'Garlic',
//   ]),
//   new Dish('Mushroom Pasta', 'Pasta', true, ['Pasta', 'Mushrooms', 'Cream']),
//   new Dish('Carbonara', 'Pasta', false, [
//     'Pasta',
//     'Bacon',
//     'Cream',
//     'Egg Yolk',
//     'Peas',
//   ]),
//   new Dish('Lasagne', 'Pasta', false, [
//     'Pasta',
//     'Beek Mince',
//     'Tomato',
//     'Beschamel',
//     'Side Salad',
//   ]),
//   new Dish('Potato and Cauliflower Curry', 'Rice', true, [
//     'Rice',
//     'Potato',
//     'Onion',
//     'Cauliflower',
//     'Coconut Cream',
//     'Augergine',
//   ]),

//   new Dish('Chilli con Carne', 'Rice', false, [
//     'Rice',
//     'Beef',
//     'Tomato',
//     'Kidney Beans',
//     'Paprika',
//     'Cumin',
//   ]),
//   new Dish('Veggie Chilli', 'Rice', false, [
//     'Rice',
//     'Tomato',
//     'Kidney Beans',
//     'Paprika',
//     'Cumin',
//   ]),
//   new Dish('Teriyaki Salmon with Rice', 'Rice', false, [
//     'Rice',
//     'Salmon',
//     'Green Veg',
//   ]),

//   new Dish('Beef Stroganoff', 'Rice', false, [
//     'Rice',
//     'Beef',
//     'Cream',
//     'Green Beans',
//   ]),
//   new Dish('Creamy Chicken with Green Beans', 'Rice', false, [
//     'Rice',
//     'Cream',
//     'Chicken',
//     'Green Beans',
//   ]),
//   new Dish('Coq Au Vin', 'Rice', false, [
//     'Rice',
//     'Chicken',
//     'Bacon',
//     'Cabbage',
//     'Mushrooms',
//     'Potatoes',
//     'Wine',
//   ]),
//   new Dish('Swedish Meatballs', 'Rice', false, [
//     'Rice',
//     'Beef & Pork Mince',
//     'Cream',
//     'Dill',
//   ]),
//   new Dish('Beef Stir Fry', 'Rice', false, [
//     'Rice',
//     'Beef',
//     'Brocolli',
//     'Mini Corn',
//     'Garlic',
//     'Spring Onion',
//   ]),
//   new Dish('Chicken Biryani', 'Rice', false, [
//     'Rice',
//     'Chicken',
//     'Spices',
//     'Onion',
//     'Yoghurt',
//   ]),

//   new Dish('Roast Chicken & Potatoes', 'Potato', false, [
//     'Potato',
//     'Whole Chicken',
//     'Green Veg',
//   ]),
//   new Dish('Burger & Chips', 'Potato', false, [
//     'Potato',
//     'Beef Burger',
//     'Buns',
//     'Corn on Cob',
//   ]),
//   new Dish('Fish & Chips', 'Potato', false, ['Potato', 'Fish', 'Green Veg']),
//   new Dish('Jacket Potato', 'Potato', true, ['Potato', 'Cheese', 'Salad']),
//   new Dish('Fish Pie', 'Potato', false, ['Potato', 'Fish', 'Green Veg']),

//   new Dish('One Pot Chicken with Cous Cous', 'Cous Cous', false, [
//     'Cous Cous',
//     'Chicken',
//     'Peppers',
//     'Olives',
//     'Lemon',
//   ]),
//   new Dish('Lamb or Chicken Tagine', 'Cous Cous', false, [
//     'Cous Cous',
//     'Lamb or Chicken',
//     'Tomato',
//     'Onion',
//     'Garlic',
//   ]),
//   new Dish('White Fish, Chorizo & White Bean Stew', 'Cous Cous', false, [
//     'Cous Cous',
//     'White Fish',
//     'Chorizo',
//     'Canellini Beans',
//     'Tomato',
//   ]),
//   new Dish('Ramen Noodles', 'Noodles', false, [
//     'Noodles',
//     'Left over meat',
//     'Green Veg',
//   ]),

//   new Dish('Stir Fry Chicken & Noodles', 'Noodles', false, [
//     'Noodles',
//     'Chicken',
//     'Brocolli',
//     'Mini Corn',
//   ]),
//   new Dish('Stir Fry Tofu & Green Veg', 'Noodles', true, [
//     'Noodles',
//     'Tofu',
//     'Brocolli',
//     'Mini Corn',
//     'Green Beans',
//   ]),
//   new Dish('Chicken Quesadilla', 'Tortilla', false, [
//     'Tortilla',
//     'Chicken',
//     'Cheese',
//     'Black Beans',
//     'Sweetcorn',
//   ]),
//   new Dish('Chicken Wrap', 'Tortilla', false, [
//     'Tortilla',
//     'Chicken',
//     'Cheese',
//     'Avocado',
//     'Sour Cream',
//     'Lettuce',
//   ]),
//   new Dish('Enchilada', 'Tortilla', false, [
//     'Tortilla',
//     'Beef or Chicken',
//     'Tomato',
//     'Onion',
//     'Pepper',
//   ]),

//   new Dish('Lamb Kofte', 'Tortilla', false, [
//     'Tortilla',
//     'Lamb mince',
//     'Tomato',
//     'Avocado',
//     'Cucumber',
//     'Hummus',
//   ]),
// ;

module.exports = dishes;
