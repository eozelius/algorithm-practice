/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  console.log(`nums => `, nums)
  
  for(let i = 0; i < nums.length; i++) {
    console.log(`nums[${i}] => ${nums[i]}`)

    if (nums[i] === 0) {
      const rest = nums.slice(i, nums.length)

      
      const restContainsANonZeroValue = rest.some(r => r !== 0)

      if (restContainsANonZeroValue) {
        nums.splice(i,1)
        nums.push(0)
        i--
      }
      
      console.log(`rest => `, rest)
      console.log(`restContainsANonZeroValue => `, restContainsANonZeroValue)
    }

    console.log(`nums => ${nums}`)
  }
  return nums
};

const r = moveZeroes([0,1,0,3,12])

console.log(`r => `, r)
