const deepEqual = (obj1, obj2) => {
  if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 && obj2) {
    let keys = Object.keys(obj1);
    for (key of keys) {
      return deepEqual(obj1[key], obj2[key]);
    }
  } else {
    return obj1 === obj2;
  }
};

let obj = {here: {is: 'an'}, object: 2};
//let obj = {a: 1, b: 2, c: 3};
let obj2 = {here: {is: 'a'}, object: 3};
console.log(deepEqual(obj, obj2));