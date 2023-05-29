const eqArrays = (actual, expected) => {
    if (actual.length !== expected.length) return false;
  
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }
    return true;
};
  
const assertArraysEqual = (actual, expected) => {
    if (eqArrays(actual, expected)) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const middle = (arr) => {
    const arrLength = arr.length;
    if (arrLength <= 2) return [];
  
    const middle = Math.floor(arrLength / 2);
    if (arrLength % 2 !== 0) {
      return [arr[middle]];
    } else {
      return [arr[middle - 1], arr[middle]];
    }
};
  
  
  //TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);