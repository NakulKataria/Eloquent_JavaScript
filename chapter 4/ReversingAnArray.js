// Your code here.
function reverseArray( arr){
    const n= arr.length;
    let newArr=[];
    for(let i=0;i<n;i++){
      newArr.push(arr[n-1-i]);}
    return newArr;}
  function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements at left and right indices
      [arr[left], arr[right]] = [arr[right], arr[left]];
      
      // Move pointers towards the center
      left++;
      right--;
    }
    
  
  }
  
    
  
  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray));
  // → ["C", "B", "A"];
  console.log(myArray);
  // → ["A", "B", "C"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]