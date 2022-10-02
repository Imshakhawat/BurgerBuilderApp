const builder_ingredients = [
  {
    id: 1,
    type: "builder_item",
    price: 10,
    url: require("../assets/jpg/top.jpg"),
  },
  {
    id: 2,
    type: "builder_item",
    price: 20,
    ingredient_type:2 ,
    url: require("../assets/jpg/cheese.jpg"),
  },
  {
    id: 3,
    type: "builder_item",
    price: 5,
    ingredient_type:3 ,
    url: require("../assets/jpg/lettuce.jpg"),
  },
  {
    id: 4,
    type: "builder_item",
    price: 50,
    ingredient_type: 4 ,
    url: require("../assets/jpg/meat.jpg"),
  },
  {
    id: 5,
    type: "builder_item",
    price: 10,
    ingredient_type: 5,
    url: require("../assets/jpg/tomato.jpg"),
  },
  {
    id: 6,
    type: "builder_item",
    //price:10,
    url: require("../assets/jpg/bottom.jpg"),
  },
];

const builder_items = [
  {
    id: 20,
    type: "bar_item",
    price: 10,
    ingredient_type: 2,
    url: require("../assets/icons/cheese.png"),
  },
  {
    id: 30,
    type: "bar_item",
    price: 5,
    ingredient_type: 3,
    url: require("../assets/icons/lettuce.png"),
  },
  {
    id: 40,
    type: "bar_item",
    price: 50,
    ingredient_type: 4,
    url: require("../assets/icons/patty.png"),
  },
  {
    id: 50,
    type: "bar_item",
    price: 10,
    ingredient_type: 5,
    url: require("../assets/icons/tomato.png"),
  },
];


export function getIngredients() {
  return builder_ingredients;
}

export function getIngredientsByid(id) {
  return builder_ingredients.find((m) => m.id === id);
}


export function getItems() {
  return builder_items;
}

export function getItemsByid(id) {
  return builder_items.find((m) => m.id === id);
}
