module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(arr => {
    arr.forEach(el => {
      if (el === '^^') {
        result += 1;
      }
    });
  });
  return result;
};
