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
  const islands = 0;

  // nested for loop to iter each cell
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // is current cell land?
      const currentCell = grid[i][j]
      const currentCellIsLand = currentCell === '1'

      console.log(`## [ ${i}, ${j}] #####`)
      
      // if yes -> check top, right, bot, left neighbors to see if there is land
      if (currentCellIsLand) {
        const neighbors = checkNeighbors([i, j], grid)

        let hasLandNeighbors = false;
        for (const key in neighbors) {
          const direction = neighbors[key];
          if (direction) {
            hasLandNeighbors = true
          }
        }

        // if a neighbor is land, then -> check T,R,B,L nieghbors of THAT cell to see if there is land
        while (hasLandNeighbors) {
          console.log(`[ Main ] while() i,j => `, [i, j])
          hasLandNeighbors = false

          for (const key in neighbors) {
            const direction = neighbors[key];
            if (direction) {
              if (key === 'UP') {
                console.log('chekcing to the UP')
                const adjacentCellHasANeighbor = checkNeighbors([i - 1,j], grid, [ 'RIGHT', 'UP', 'LEFT'])
                if (adjacentCellHasANeighbor) {
                  // continue while
                  hasLandNeighbor = true;
                }
              }

              if (key === 'RIGHT') {
                console.log('chekcing to the RIGHT')
                const adjacentCellHasANeighbor = checkNeighbors([i, j + 1], grid, [ 'RIGHT', 'BOTTOM', 'UP'])
                if (adjacentCellHasANeighbor) {
                  // continue while
                  hasLandNeighbor = true;
                }
              }

              if (key === 'LEFT') {
                console.log('chekcing to the LEFT')
                const adjacentCellHasANeighbor = checkNeighbors([i, j - 1], grid, [ 'LEFT', 'BOTTOM', 'UP'])
                if (adjacentCellHasANeighbor) {
                  // continue while
                  hasLandNeighbor = true;
                }
              }

              if (key === 'BOTTOM') {
                console.log('chekcing to the BOTTOM')
                const adjacentCellHasANeighbor = checkNeighbors([i + 1, j], grid, [ 'LEFT', 'BOTTOM', 'RIGHT'])
                if (adjacentCellHasANeighbor) {
                  // continue while
                  hasLandNeighbor = true;
                }
              }
            }
          }
        }

        //    if a neighbor is not land, then I know that I can backtrack.  If there are no more neighbors to check, then we have found a complete island
      }
    }    
  }


  return islands;
};


var checkNeighbors = (cell, grid, directionsToCheck = [ 'UP', 'RIGHT', 'BOTTOM', 'LEFT' ]) => {
  const [row, col] = cell;
  console.log(`[ main ] checkNeighbors() [ ${row}, ${col} ]`)

  const neighbors = {
    UP: false,
    DOWN: false,
    RIGHT: false,
    LEFT: false,
  }
  
  // UP
  // Check row must be at least 2nd row, for top be checked.
  if (row > 0 && directionsToCheck.includes('UP')) {
    const cellAbove = grid[row - 1][col]
    if (cellAbove === '1') {
      neighbors['UP'] = true
    }
  }

  // RIGHT
  // Check col must be at most 2nd to last col
  if (col < grid[0].length && directionsToCheck.includes('RIGHT')) {
    const cellRight = grid[row][col + 1]
    if (cellRight === '1') {
      neighbors['RIGHT'] = true
    }
  }

  // DOWN
  // Check row must be at most 2nd to last row
  if (row < grid.length && directionsToCheck.includes('DOWN')) {
    const cellDown = grid[row + 1][col]
    if (cellDown === '1') {
      neighbors['DOWN'] = true
    }
  }

  // LEFT
  // Check row must be at most 2nd to last row
  if (col > 0 && directionsToCheck.includes('LEFT')) {
    const cellLeft = grid[row][col - 1]
    if (cellLeft === '1') {
      neighbors['LEFT'] = true
    }
  }

  console.log(`[ Mian ] checkNeighbors() neighbors => `, neighbors)

  return neighbors
  
}


const ex1 = [
  [ '0', '0', '0' ],
  [ '0', '1', '1' ],
  [ '0', '0', '0' ],
]

const r1 = numIslands(ex1)
console.log(`r1 => `, r1)