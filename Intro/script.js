/*Data types

    - string -> "sklkldflksndfklj" "1"
    - number -> 30
    - boolean -> true or false
    - undefined
    - null

*/

/* Declaring Variables - WIPE var from your memories!

    ! - let - can be changed
    ! - const - cant be changed directly

*/

const myName = "Corey";
let fullName = myName + " Mckeel";
console.log(fullName);

// Conditionals
let num = 16;
let condition1 = num % 3 == 0; // DId you know you could set a conditional to a variable!?
let condition2 = num % 2 == 0;

if (condition1) {
  // run code
  console.log("Num is divisible by 3");
} else if (condition2) {
  console.log("Num is divisible by 2");
} else {
  console.log("Num:", num);
}

// Data Structures
const newArray = [];
// newArray = [1, 2, 3, 4]; -> This will throw an error - Why???

newArray.push(0); // This is perfectly fine
newArray[0] = 10; // This is also fine

newArray.push("Hello");
console.log(newArray); // [10, "Hello"]

// Objects
const obj = {
  firstName: "Corey",
  lastName: "Mckeel",
  age: 29,
  address: {
    street: "1234 example rd",
    zip: 123456,
  },
};

const { lastName, firstName, age, address } = obj;
address.street;

console.log(firstName);

const myRandomArray = [
  12,
  "Charlie",
  true,
  "Fox",
  "Turtle",
  "Tiger",
  "Horse",
  "Whale",
  "Rabbit",
  "Sloth",
  "Python",
  "Camel",
];

// FUN FACT: Arrays are also technically objects, their structure looks like this:
/*
    {
        0: 12,
        1: "Charlie",
        2: true,
        etc...
    }
*/

const [twelve, charlie, isHungry, ...animals] = myRandomArray; // we can get the first few values from the array
console.log(animals); // then create another array out of the remaining values

console.log(charlie); // Charlie
console.log(animals[1]); // Turtle

let mutableAnimalArray = [...animals]; // creating a copy of the array

// Looping through an array -> NEW IN ES6+
for (let item of myRandomArray) {
  console.log(item);
}
