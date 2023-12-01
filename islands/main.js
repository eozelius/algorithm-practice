const traverseNeighbors = (cell, grid, directionsToCheck = [], map) => {
  const [ row, col ] = cell;
  
  console.log(`   >>>> [ traverseNeighbors ] => [ ${row}, ${col} ]`)

  // UP
  if (row > 0 && directionsToCheck.includes('UP')) {    
    if (grid[row - 1][col] === '1' && map[row - 1][col].traversed === false) {
      console.log(`         >>>> [ traverseNeighbors() ] [${row}, ${col}] UP!! invoking traverserNeighbors for cell: [ ${row - 1 }, ${col} ]`)
      map[row - 1][col].traversed = true;
      traverseNeighbors([row - 1, col], grid, ['UP', 'RIGHT', 'LEFT'], map)
    }
  }

  // DOWN
  if (row < grid.length - 1 && directionsToCheck.includes('DOWN')) {
    if (grid[row + 1][col] === '1' && map[row + 1][col].traversed === false) {
      console.log(`         >>>> [ traverseNeighbors() ] [${row}, ${col}] DOWN!! invoking traverserNeighbors for cell: [ ${row + 1}, ${col} ]`)
      map[row + 1][col].traversed = true
      traverseNeighbors([row + 1, col], grid, ['DOWN', 'RIGHT', 'LEFT'], map)
    }
  }

  // RIGHT
  if (col < grid[0].length && directionsToCheck.includes('RIGHT')) {
    if (grid[row][col + 1] === '1' && map[row][col + 1].traversed === false) {
      console.log(`         >>>> [ traverseNeighbors() ] [${row}, ${col}] RIGHT!! invoking traverserNeighbors for cell: [ ${row}, ${col + 1} ]`)
      map[row][col + 1].traversed = true
      traverseNeighbors([row, col + 1], grid, ['DOWN', 'RIGHT', 'UP'], map)
    }
  }

  // LEFT
  if (col > 0 && directionsToCheck.includes('LEFT') ) {
    if (grid[row][col - 1] === '1' && map[row][col - 1].traversed === false) {
      console.log(`         >>>> [ traverseNeighbors() ] [${row}, ${col}] LEFT!! invoking traverserNeighbors for cell: [ ${row}, ${col - 1} ]`)
      map[row][col - 1].traversed = true
      traverseNeighbors([row, col - 1], grid, ['UP', 'DOWN','LEFT'], map)
    }
  }

  console.log(`             >>>> [ traverseNeighbors ] [ ${row}, ${col} ] BackTrack! => `)

}

/**
 * @param {character[][]} grid
 * @return {number}
 *
 * 
 */
var numIslands = function(grid) {
  let islands = 0;

  const map = []

  for (let i = 0; i < grid.length; i++) {
    map.push([])
    for (let j = 0; j < grid[i].length; j++) {
      map[i].push({
        coor: [i,j],
        isLand: grid[i][j] === '1',
        traversed: false,
        id: Math.floor(Math.random() * 9999)
      })
    }
  }

  // nested for loop to iter each cell
  for (let i = 0; i < grid.length; i++) {
    // add a new row to map
    for (let j = 0; j < grid[i].length; j++) {
      // is current cell land?
      const isLand = grid[i][j] === '1';
      const isAlreadyTraversed = map[i][j].traversed;

      // if yes -> check top, right, bot, left neighbors to see if there is land
      if (isLand && isAlreadyTraversed === false) {
        map[i][j].traversed = true;
        console.log(`## [ ${i}, ${j}] LAND HO!!!!!!!!! #####`)
        islands++
        // console.log('JSON.stringify(map) => ', JSON.stringify(map, null, 4))
        traverseNeighbors([i,j], grid, ['UP', 'DOWN', 'RIGHT', 'LEFT'], map)
      } else if (isLand && isAlreadyTraversed === true) {
        // is land, but has already been accounted for as part of another island
        // i.e. do nothing
      } else {
        // is not land, i.e. mark as traversed, continue on.
        map[i][j].traversed = true;
      }
    }
  }

  return islands;
};

// const ex1 = [
//   [ '1', '1', '0', '0' ],
//   [ '1', '1', '0', '0' ],
//   [ '0', '0', '1', '1' ],
//   [ '0', '1', '0', '1' ],
//   [ '1', '0', '0', '0' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
//   [ '0', '0', '0', '1' ],
// ]

// const ex2 = [
//   ["1","1","1"],
//   ["1","0","1"],
//   ["1","1","1"]
// ]

// const r1 = numIslands(ex1)
// console.log(`r1 => `, r1)

// const r2 = numIslands(ex2)
// console.log(`r2 => `, r2)


const ex3 = [
  ["1","1","1","1","1","0","1","1","1","1"],
  ["1","0","1","0","1","1","1","1","1","1"],
  ["0","1","1","1","0","1","1","1","1","1"],
  ["1","1","0","1","1","0","0","0","0","1"],
  ["1","0","1","0","1","0","0","1","0","1"],
  ["1","0","0","1","1","1","0","1","0","0"],
  ["0","0","1","0","0","1","1","1","1","0"],
  ["1","0","1","1","1","0","0","1","1","1"],
  ["1","1","1","1","1","1","1","1","0","1"],
  ["1","0","1","1","1","1","1","1","1","0"]
]

const r3 = numIslands(ex3)
console.log(`r3 => `, r3)
