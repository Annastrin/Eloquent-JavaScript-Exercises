const range = (start, end, step = start < end ? 1 : -1) => {
  let array = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) array.push(i);
  } 
  else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
};

const sum = array => {
  return array.reduce((prev, curr) => prev + curr);
}

console.log(range(5, -5));
console.log(sum([0, 1, 2, 3, 4, 5]));
console.log(sum(range(0, 10)));