// Ternaries
let check = true;

let result = check ? "Kowabunga dude!" : "Ow maaannnn";
console.log(result);

// Passing by reference
const obj = {
  name: "Harlin",
};

// console.log(obj.firstName);

const myFunction = (objRef) => {
  const resultObj = { ...objRef };
  resultObj.firstName = "Monkey";
  return resultObj;
};

console.log(myFunction(obj));

console.log(obj);
