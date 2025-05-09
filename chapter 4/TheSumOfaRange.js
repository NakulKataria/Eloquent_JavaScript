// Your code here.
function range(start, end, jump = 1) {
    if (jump === 0) {
      throw new Error("Jump cannot be zero.");
    }
  
    let num = [start];
    let n = start;
  
    if (jump > 0) {
      while (n + jump <= end) { 
        n += jump;
        num.push(n);
      }
    } else {
      while (n + jump >= end) { 
        n += jump;
        num.push(n);
      }
    }
  
    return num;
  }
  
  function sum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
      sum+=arr[i];}
    return sum;}
      
      
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55