// Your code here.
function deepEqual(a, b) {
    if (a === b) return true; // Same reference or primitive value
  
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
      return false; // If either is not an object (or null), return false
    }
  
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) return false; // Different number of properties
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false; // Key not found or values don't match recursively
      }
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true