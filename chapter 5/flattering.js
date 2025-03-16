let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
const flattened = arrays.reduce((accumulator, current) => accumulator.concat(current), []);
console.log(flattened);
// → [1, 2, 3, 4, 5, 6]
