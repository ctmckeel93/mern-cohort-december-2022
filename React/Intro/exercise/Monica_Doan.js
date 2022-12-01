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

//*I had issues with the Live Share feature...that's why it took me so long...
const { firstName, lastName, ...rest } = person;
console.log(firstName);
console.log(rest);
