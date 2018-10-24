//Visit all non-visited cells connected to given cell
//Time: O(n) Space: O(n)
//n = number of non-visited connected cells
function sinkIsland(matrix, rowI, colI) {
  matrix[rowI][colI] = '1'; //Mark current cell as visited
  //TRAVERSE RIGHT
  if (matrix[rowI + 1] !== undefined && matrix[rowI + 1][colI] === '0') {
    sinkIsland(matrix, rowI + 1, colI);
  }
  //TRAVERSE DOWN
  if (matrix[rowI][colI + 1] === '0') {
    sinkIsland(matrix, rowI, colI + 1);
  }
  //TRAVERSE LEFT
  if (matrix[rowI - 1] !== undefined && matrix[rowI - 1][colI] === '0') {
    sinkIsland(matrix, rowI - 1, colI);
  }
  //TRAVERSE UP
  if (matrix[rowI][colI - 1] === '0') {
    sinkIsland(matrix, rowI, colI - 1);
  }
}
