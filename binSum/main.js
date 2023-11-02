// 10 - 1010
//   digit => 4
//     [1] sum += 1 * w = 8 => sum = 8 {w = 8}
//     [0] sum += 0 * y = 0 => sum = 8 {y = 4}
//     [1] sum += 1 * z = 2 => sum = 10 {z = 2}
//     [0] sum += 0 * j = 0 => sum = 10 {j = 1}

const convertBinStrToInt = (str) => {
  console.log(`str => `, str)
  
  let sum = BigInt(0)
  let digitCounter = (str.length - 1)
  let digit = BigInt(2 ** digitCounter)

  console.log(`digit => `, digit)
  console.log(`sum => `, sum)

  str.split('').forEach((d, i) => {
      console.log(`[ ${i} ] forEach() d =>`, d, 'sum => ', sum, 'digit => ', digit, 'digitCounter => ', digitCounter)

      const newSum = BigInt(d) * BigInt(digit)
      console.log(`newSum => `, newSum)
      
      // sum += d * digit
      sum += newSum
      digitCounter--
      // console.log(`digitCounter => `, digitCounter)
      digit = 2 ** digitCounter
  })

  console.log(`sum => `, sum)

  return sum
}

const convertIntToBinStr = (num) => {
  // figure out how many bin digits we will need to rep this num.
  let numDigits = 1
  let numClone = parseInt(num) // 8


// 1
//   [numDigits= 1] 2 ** 1 = 2 // 1 >= 2 -> true, increment numDigits

// 8
//   [i = 1] 2 ** 1 = 2 // 8 >= 2 -> true, increment numDigits
//   [i = 2] 2 ** 2 = 4 // 8 >= 4 -> true
//   [i = 3] 2 ** 3 = 8 // 8 >= 8 -> true


  while(2 ** numDigits <= numClone) {
    console.log(`[${numDigits}]`, `(2 ** ${numDigits}) => ${2 ** numDigits}`)
    numDigits++
  }


  //   // 8 >= 1 => true
  //   //    numDigits = 1
  //   // 3 >= 1 => true
  //   //    numDigits = 2
  //   // 1.584962500721156 >= 1 => true
  //   //    numDigits = 3
  //   // 0.6644487074538893 >= 1 => false
  //   //    numDigits = 3

  //   while (numClone >= 1) {
  //     console.log(`numClone => `, numClone, `numDigits => ${numDigits}`)
  //     numDigits++
  //     numClone = Math.log2(numClone)
  //   }

  //   if (num === 1) {
  //     numDigits = 1
  //   }

  console.log(`numDigits => `, numDigits)

  let binStr = ''

  for(let i = numDigits; i > 0; i--) {
    console.log(`[${i}] num => ${num}; numDigits => ${numDigits}` )

    if (num >= (2 ** i / 2)) {
      binStr += '1'
      num -= 2 ** (i - 1)
    } else {
      binStr += '0'
    }
  }
  console.log(`binStr => `, binStr)

  return binStr
}


/**
* @param {string} a
* @param {string} b
* @return {string}
*/
var addBinary = function(a, b) {
  const a1 = convertBinStrToInt(a)
  const b1 = convertBinStrToInt(b)

  console.log(`a1 => `, a1)
  console.log(`b1 => `, b1)
  
  const sum = a1 + b1
  return convertIntToBinStr(sum)
};

// 3, 1
// const r = addBinary(
//   '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', 
//   '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
// )

const r = convertBinStrToInt('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101')

// const r = convertIntToBinStr(32)

console.log(`r => `, r)

// 1 2 4 8 16 32 64 128


// W          X           Y           Z
// [8-15]    [4-7]      [2-3]      [0-1]  

// 21
//   [i = 1] 2 ** 1 = 2 // 21 >= 2 -> true, so continue
//   [i = 2] 2 ** 2 = 4 // 21 >= 4 -> true
//   [i = 3] 2 ** 3 = 8 // 21 >= 8 -> true
//   [i = 4] 2 ** 4 = 16 // 21 >= 16 -> true
//   [i = 5] 2 ** 5 = 16 // 21 >= 32 -> false

// 8
//   [i = 1] 2 ** 1 = 2 // 8 >= 2 -> true, so continue
//   [i = 2] 2 ** 2 = 4 // 8 >= 4 -> true
//   [i = 3] 2 ** 3 = 8 // 8 >= 8 -> true





// 1 - 1
// 2 - 10
// 3 - 11
// 4 - 100
// 5 - 101
// 6 - 110
//     6 => if (num > (2 ** digits / 2)) { '1' }
//     6 => if (6 > (2 ** 3 / 2)) = (6 > 4) {'1'}
//        6 - 4 = 2
//        num -= ()

// 
// 7 - 111
// 8 - 1000
//   digit => 4
// 9 - 1001
//   digit => 4
// 10 - 1010
//   digit => 4
//     [1] sum += 1 * w = 8 => sum = 8 {w = 8}
//     [0] sum += 0 * y = 0 => sum = 8 {y = 4}
//     [1] sum += 1 * z = 2 => sum = 10 {z = 2}
//     [0] sum += 0 * j = 0 => sum = 10 {j = 1}
// 11 - 1011
//   digit => 4
//     [1] sum += 1 * w = 8 => sum = 8. {w=8}
//     [0] sum += 0 * y = 0 => sum = 8. {y=4}
//     [1] sum += 1 * z = 2 => sum = 10. {z=2}
//     [1] sum += 1 * x = 1 => sum = 11. {x=1}


// 12 - 1100
//   digit => 4
// 13 - 1101
//   digit => 4
// 14 - 1110
//   digit => 4
// 15 - 1111
//   digit => 4
// 16 - 10000
// 17 - 10001


// 21 - 10101