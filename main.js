/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  console.log(`nums => `, nums)
  
  for(let i = 0; i < nums.length; i++) {
      console.log(`nums[${i}] => ${nums[i]}`)
      
      if (nums[i] === 0) {
          nums.splice(i,1)
          nums.push(0)
          i--
      }

      console.log(`nums => ${nums}`)
  }
  return nums
};

const r = moveZeros([0,1,0,3,12])

console.log(`r => `, r)
