const reverseArray = array => {
  let result = [];
  for (let value of array) {
    result.unshift(value);
  }
  return result;
};

const reverseArrayInPlace = array => {
  for (let i = 0; i < array.length / 2; i++) {
    let oldValue = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = oldValue;
  }
  return array;
};

console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));