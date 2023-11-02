/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const map = new Set()
  const numsLength = nums.length

  for (let i = 0; i < numsLength; i++) {
      const currentNum = nums[i]

      if (currentNum === undefined) {
          // console.log('currentNum is undefined. continue. i +> ', i)
          continue
      }

      // console.log(`[${i}] currentNum => `, currentNum)
      
      if (map.has(currentNum)) {
          // duplicate
          nums.splice(i, 1)
          i--
      } else {
          map.add(currentNum)
      }
      // console.log('.  >> map =>', map)
      // console.log('.  >> nums =>', nums)
  }

  // nums.forEach(n => {
  //     // if (n === undefined) {
  //     //     console.log('currentNum is undefined. continue. i +> ', i)
  //     //     continue
  //     // }

  //     console.log(`n => `, n)

  //     if (map.has(n)) {
  //         // duplicate
  //         nums.splice(nums.indexOf(n), 1)
  //     } else {
  //         map.add(n)
  //     }
  //     // console.log('.  >> map =>', map)
  //     console.log('.  >> nums =>', nums)
  // })

  // return nums.length
  return nums
};

const response = removeDuplicates([1,2,3,3,4,5,5,6,7,7,7])

console.log(`response => `, response)
