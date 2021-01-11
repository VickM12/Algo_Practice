var twoSum = function(nums, target) {
  let left = 0;
  let right = nums.length -1;
  while(left < right){
    let sum = nums[left] + nums[right];
    if(sum === target){
      return [left, right]
    } else if(sum !== 0){
      console.log(sum)
      left++
    } 
  } 
};

console.log(twoSum([3, 2, 4], 6))