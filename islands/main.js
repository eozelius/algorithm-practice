/**
 * @param {character[][]} grid
 * @return {number}
 *
 * 
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Input: grid = [
  ["1","1","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

[ 0 0 0]
[ 0 1 0]
[ 0 0 0]

0,0 => { cell: true, island: 1, traversed: true, neighbors: { up: false, right: true, left: false, down: true } }
0,1 => { cell: true, island: 1, traversed: true, neighbors: { up: false, right: false, left: true, down: true } }
0,2 => { cell: false, island: null, traversed: true, neighbors: { up: false, right: false, left: true, down: false } }


Output: 3

* 
 * 
 * 
 * 


 */
var numIslands = function(grid) {
  let islands = 0;

  // nested for loop to iter each cell
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // is current cell land?
      const isLand = grid[i][j] === '1';

      // if yes -> check top, right, bot, left neighbors to see if there is land
      if (isLand) {
        console.log(`## [ ${i}, ${j}] LAND HO!!!!!!!!! #####`)
        let hasLandNeighbor = false;
                
        // UP
        if (i > 0) {
          console.log('chekcing UP')
          const cellAbove = grid[i - 1][j]
          if (cellAbove === '1') {
            hasLandNeighbor = true;
          }
        }
        
        // RIGHT
        if(j < grid[0].length) {
          console.log('chekcing RIGHT')

          const cellRight = grid[i][j + 1]
          if (cellRight === '1') {
            hasLandNeighbor = true;
          }
        }

        // LEFT
        if (j > 0) {
          console.log('chekcing LEFT')

          const cellLeft = grid[i][j - 1]
          if (cellLeft === '1') {
            hasLandNeighbor = true;
          }
        }

        // BOTTOM
        if (i < grid.length) {
          console.log('chekcing BOTTOM')
          const cellDown = grid[i + 1][j]
          if (cellDown === '1') {
            hasLandNeighbor = true;
          }
        }

        console.log(`hasLandNeighbor => `, hasLandNeighbor)


        if (!hasLandNeighbor) {
          islands++
        }
      }
    }
  }

  return islands;
};


// var checkNeighbors = (cell, grid, directionsToCheck = [ 'UP', 'RIGHT', 'BOTTOM', 'LEFT' ]) => {
//   const [row, col] = cell;
//   console.log(`[ main ] checkNeighbors() [ ${row}, ${col} ]`)

//   const neighbors = {
//     UP: false,
//     DOWN: false,
//     RIGHT: false,
//     LEFT: false,
//   }
  
//   // UP
//   // Check row must be at least 2nd row, for top be checked.
//   if (row > 0 && directionsToCheck.includes('UP')) {
//     const cellAbove = grid[row - 1][col]
//     if (cellAbove === '1') {
//       neighbors['UP'] = true
//     }
//   }

//   // RIGHT
//   // Check col must be at most 2nd to last col
//   if (col < grid[0].length && directionsToCheck.includes('RIGHT')) {
//     const cellRight = grid[row][col + 1]
//     if (cellRight === '1') {
//       neighbors['RIGHT'] = true
//     }
//   }

//   // DOWN
//   // Check row must be at most 2nd to last row
//   if (row < grid.length && directionsToCheck.includes('DOWN')) {
//     const cellDown = grid[row + 1][col]
//     if (cellDown === '1') {
//       neighbors['DOWN'] = true
//     }
//   }

//   // LEFT
//   // Check row must be at most 2nd to last row
//   if (col > 0 && directionsToCheck.includes('LEFT')) {
//     const cellLeft = grid[row][col - 1]
//     if (cellLeft === '1') {
//       neighbors['LEFT'] = true
//     }
//   }

//   console.log(`[ Mian ] checkNeighbors() neighbors => `, neighbors)

//   return neighbors
  
// }


const ex1 = [
  [ '0', '0', '0' ],
  [ '0', '1', '1' ],
  [ '0', '0', '0' ],
]

const r1 = numIslands(ex1)
console.log(`r1 => `, r1)