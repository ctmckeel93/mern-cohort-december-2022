const nums = [1, 22, 3, 4, 9, 10, 122, 44, 53, 67, 2];
// map
const mappedNums = nums.map((num) => num * 5);

console.log(nums);
console.log(mappedNums);

// filter
const filteredNums = nums.filter((num) => num % 2 === 0);
console.log(filteredNums);
