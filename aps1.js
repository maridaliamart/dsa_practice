function uniqueNumber(nums) {
    let result = 0;
    
    for (let num of nums) {
    //result = result ^ num OR result^= num (simpler syntax, same value)
      result ^= num;
    }
  
    return result;
  }
 
export default uniqueNumber;