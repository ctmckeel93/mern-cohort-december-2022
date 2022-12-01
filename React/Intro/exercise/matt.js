const person = {
  firstName: "Ash",
  lastName: "Ketchum",
  occupation: "Pokemon Master",
  age: 1000,
  favoriteFoods: [
    "Chicken",
    "Mac and Cheese",
    "Cookies",
    "Chocolate",
    "Pie",
    "Skittles",
    "Pastry",
  ],
  team: [
    "Pikachu",
    "Charizard",
    "Greninja",
    "Sirfetch'd",
    "Dragonite",
    "Lucario",
  ],
};

/*
      * Our activity for the day will be destructuring!
  
      TODO: Use destructuring to pull all of the data in the object into their own variables

      ! Bonus: Try to destructure the arrays within the object as well
      
      ? Extra Bonus: Use the rest operator to destructure a list from only the remaining sweets in favoriteFoods
  
  */

const { firstName, lastName, occupation, age } = person;
const { favoriteFoods: [...food]} = person;
const { team: [...team]} = person;
const { favoriteFoods: []}