module.exports = function towelSort (matrix) {
  let result = [];
  
  for(let row = 0; row < matrix?.length; row++) {
    if (row % 2 == 0) {
      result = result.concat(matrix[row]);
    } else {
      result = result.concat(matrix[row].reverse());
    }
  }
  
  return result;
}
