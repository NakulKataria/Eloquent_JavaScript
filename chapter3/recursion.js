// Your code here.
function isEven( num){
    // if(num<0)num*=-1;
    if(num===1)return false;
    if(num===0) return true;
    return isEven(num-2);
  }
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??