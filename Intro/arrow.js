const obj = {
  firstName: "Corey",
  lastName: "Mckeel",
  age: 29,
  address: {
    street: "1234 example rd",
    zip: 123456,
  },
};

// function myFunction() {
//      Do code
// }

// Arrow Function Syntax -> What changed?
const myFunction = (obj) => {
  for (let prop in obj) {
    console.log(obj[prop]); // Were looping through an array of the properties in obj
  }
};

myFunction(obj);
