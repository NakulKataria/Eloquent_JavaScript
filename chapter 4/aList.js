 function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
  }
  
  // Convert a linked list back to an array
  function listToArray(list) {
    let arr = [];
    while (list) {
      arr.push(list.value);
      list = list.rest;
    }
    return arr;
  }
  
  // Add a new element at the beginning of the list
  function prepend(value, list) {
    return { value, rest: list };
  }
   // Retrieve the nth element from a list
  function nth(list, n) {
    if (!list) return undefined; // Base case: list is empty
    if (n === 0) return list.value; // Base case: found the element
    return nth(list.rest, n - 1); // Recursively move through the list
  }

  console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
