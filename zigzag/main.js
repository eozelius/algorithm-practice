/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const zigzag = []

  let isDown = true

  for (let i = 0; i < numRows; i++) {
    zigzag.push([])
  }

  for (let i = 0; i < s.length; i++) {
    const l = s[i]
    let row

    if (isDown) {
      row = i % numRows
    } else {
      row = numRows - ( i % numRows ) - 2
    }
    // console.log(`  >> numRows - row  => `, numRows - row - 1)
    // const fromTheBottom = numRows - row - 1

    console.log(`{${i}}:[${l}]; row: ${row} isDown => `, isDown)
    
    if (isDown) {
      zigzag[row].push(l)
    } else {
      const rowFromTheBottom = numRows - row - 2
      console.log(`rowFromTheBottom => `, rowFromTheBottom)
      
      for(let x = numRows - 1; x >= 0; x--) {
        console.log(`x => `, x)
        
        if (x === rowFromTheBottom) {
          zigzag[x].push(l)
        } else {
          zigzag[x].push("_")
        }
      }

      if (rowFromTheBottom === 1) {
        console.log(`>>>>>>>> Restart from top => `, )
        isDown = true
        continue
      }
    }


    //            0,1,2,3
    if (isDown && row === 3) {
      isDown = false
    } else if (!isDown && row === 3) {
      isDown = true
    }    
  }

  console.log('JSON.stringify(zigzags) => ', JSON.stringify(zigzag, null, 4))
};



const r = convert('PAYPALISHIRING', 4)
// const r = convert('PAYPAL', 4)
// console.log(`r => `, r)

/**
 * PAYPALISHIRING 3
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * 0   4   8    12
 * 1 3 5 7 9 11 13
 * 2   6   10
 * 
 * PAHN-APLSIIG-YIR
 * 
 */

/**
 * PAYPALISHIRING 4
 * 
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 * 
 * 0     6     12
 * 1   5 7  11 13
 * 2 4   8 10
 * 3     9
 * 
 * 
 * 
 * 
 * 4
 * 3
 * 2 
 * 1
 * 
 * 
 * 
 * PIN-ALSIG-YAHR-PI
 * PINALSIGYAHRPI
 * 
 */


const asdf = [
    ["P", "S", "H"  ],
    ["A", "I", "I"  ],
    ["Y", "L", "R", "G" ],
    ["P", "A", "I", "N" ]
]


const bsdf = [
    [ "P", null, null, "I", null, null, "N" ],
    [ "A", null, "L",  "S", null, "I",  "G" ],
    [ "P", "A",  null, "H", "R" ],
    [ "P", null, null, "I" ],
]

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// [
//     [ "P", null, null, null, null, null, null ],
//     [ "A", null, "L",  null, "I",  null, "G"  ],
//     [ "Y", "A",  null, "I",  "H",  null, "R", "N", null],
//     [ "P",  null,null, "S",  null,  null, "I",  null,  null,  ]
// ]


[
    [ "P", "A", "_", "H", "_", "N", "_" ],
    [ "A", "_", "L", "_", "I", "_", "G" ], 
    [ "Y", "_", "_", "I", "_", "_", "R", "_", "_", ],
    [ "P", "_", "_", "S", "_", "_", "I", "_", "_",  ]
]