let map = {one: true, two: true, hasOwnProperty: true};

// Fix: Use Object.prototype.hasOwnProperty.call
console.log(Object.prototype.hasOwnProperty.call(map, "one")); 

// → true