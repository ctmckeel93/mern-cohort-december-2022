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
const {
  favoriteFoods: [fav1, fav2, fav3, fav4, fav5, fav6, fav7],
} = person;
const {
  team: [team1, team2, team3, team4, team5, team6],
} = person;
const {
  favoriteFoods: [...foodies],
} = person;
