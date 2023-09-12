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
  {
    title: 'Pasta La Mafia',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: ['Pasta', 'Ham', 'Tomatoes'],
  },
  {
    title: 'Spaghetti & Meatballs',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: ['Pasta', 'Beef', 'Tomatoes', 'Garlic'],
  },
  {
    title: 'Mushroom Pasta',
    carbType: 'Pasta',
    vegetarian: true,
    ingredients: ['Pasta', 'Mushrooms', 'Cream'],
  },

  {
    title: 'Carbonara',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: ['Pasta', 'Bacon', 'Cream', 'Egg Yolk', 'Peas'],
  },

  {
    title: 'Lasagne',
    carbType: 'Pasta',
    vegetarian: false,
    ingredients: ['Pasta', 'Beek Mince', 'Tomato', 'Beschamel', 'Side Salad'],
  },
  {
    title: 'Potato and Cauliflower Curry',
    carbType: 'Rice',
    vegetarian: true,
    ingredients: [
      'Rice',
      'Potato',
      'Onion',
      'Cauliflower',
      'Coconut Cream',
      'Augergine',
    ],
  },

  {
    title: 'Chilli con Carne',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Beef', 'Tomato', 'Kidney Beans', 'Paprika', 'Cumin'],
  },

  {
    title: 'Veggie Chilli',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Tomato', 'Kidney Beans', 'Paprika', 'Cumin'],
  },

  {
    title: 'Teriyaki Salmon with Rice',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Salmon', 'Green Veg'],
  },
  {
    title: 'Beef Stroganoff',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Beef', 'Cream', 'Green Beans'],
  },
  {
    title: 'Creamy Chicken with Green Beans',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Cream', 'Chicken', 'Green Beans'],
  },
  {
    title: 'Coq Au Vin',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: [
      'Rice',
      'Chicken',
      'Bacon',
      'Cabbage',
      'Mushrooms',
      'Potatoes',
      'Wine',
    ],
  },

  {
    title: 'Swedish Meatballs',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Beef & Pork Mince', 'Cream', 'Dill'],
  },

  {
    title: 'Beef Stir Fry',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: [
      'Rice',
      'Beef',
      'Brocolli',
      'Mini Corn',
      'Garlic',
      'Spring Onion',
    ],
  },

  {
    title: 'Chicken Biryani',
    carbType: 'Rice',
    vegetarian: false,
    ingredients: ['Rice', 'Chicken', 'Spices', 'Onion', 'Yoghurt'],
  },

  {
    title: 'Roast Chicken & Potatoes',
    carbType: 'Potato',
    vegetarian: false,
    ingredients: ['Potato', 'Whole Chicken', 'Green Veg'],
  },

  {
    title: 'Burger & Chips',
    carbType: 'Potato',
    vegetarian: false,
    ingredients: ['Potato', 'Beef Burger', 'Buns', 'Corn on Cob'],
  },

  {
    title: 'Fish & Chips',
    carbType: 'Potato',
    vegetarian: false,
    ingredients: ['Potato', 'Fish', 'Green Veg'],
  },
  {
    title: 'Jacket Potato',
    carbType: 'Potato',
    vegetarian: true,
    ingredients: ['Potato', 'Cheese', 'Salad'],
  },
  {
    title: 'Fish Pie',
    carbType: 'Potato',
    vegetarian: false,
    ingredients: ['Potato', 'Fish', 'Green Veg'],
  },

  {
    title: 'One Pot Chicken with Cous Cous',
    carbType: 'Cous Cous',
    vegetarian: false,
    ingredients: ['Cous Cous', 'Chicken', 'Peppers', 'Olives', 'Lemon'],
  },
  {
    title: 'Lamb or Chicken Tagine',
    carbType: 'Cous Cous',
    vegetarian: false,
    ingredients: ['Cous Cous', 'Lamb or Chicken', 'Tomato', 'Onion', 'Garlic'],
  },

  {
    title: 'White Fish, Chorizo & White Bean Stew',
    carbType: 'Cous Cous',
    vegetarian: false,
    ingredients: [
      'Cous Cous',
      'White Fish',
      'Chorizo',
      'Canellini Beans',
      'Tomato',
    ],
  },

  {
    title: 'Ramen Noodles',
    carbType: 'Noodles',
    vegetarian: false,
    ingredients: ['Noodles', 'Left over meat', 'Green Veg'],
  },

  {
    title: 'Stir Fry Chicken & Noodles',
    carbType: 'Noodles',
    vegetarian: false,
    ingredients: ['Noodles', 'Chicken', 'Brocolli', 'Mini Corn'],
  },

  {
    title: 'Stir Fry Tofu & Green Veg',
    carbType: 'Noodles',
    vegetarian: true,
    ingredients: ['Noodles', 'Tofu', 'Brocolli', 'Mini Corn', 'Green Beans'],
  },

  {
    title: 'Chicken Quesadilla',
    carbType: 'Tortilla',
    vegetarian: false,
    ingredients: ['Tortilla', 'Chicken', 'Cheese', 'Black Beans', 'Sweetcorn'],
  },

  {
    title: 'Chicken Wrap',
    carbType: 'Tortilla',
    vegetarian: false,
    ingredients: [
      'Tortilla',
      'Chicken',
      'Cheese',
      'Avocado',
      'Sour Cream',
      'Lettuce',
    ],
  },
  {
    title: 'Enchilada',
    carbType: 'Tortilla',
    vegetarian: false,
    ingredients: ['Tortilla', 'Beef or Chicken', 'Tomato', 'Onion', 'Pepper'],
  },

  {
    title: 'Lamb Kofte',
    carbType: 'Tortilla',
    vegetarian: false,
    ingredients: [
      'Tortilla',
      'Lamb mince',
      'Tomato',
      'Avocado',
      'Cucumber',
      'Hummus',
    ],
  },
];

module.exports = dishes;
