const arrayToList = (array) => {
  let list = null;
  for (let i = array.length-1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let array = [];
  for (let node = list; node.rest !== null; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

const prepend = (value, list) => {
  return {value, rest: list};
};

const nth = (list, number) => {
  if (number === 0) {
    return list.value;
  } else if (list.rest !== null) {
    return nth(list.rest, number-1);
  } else {
    return undefined;
  }
};

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30, 40])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));