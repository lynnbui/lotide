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

  const flatten = (arr) => {
    let result = []
    for (const e of arr) {
      if (!Array.isArray(e)) {
        result.push(e)
        continue
      }
  
      for (const innerElement of e) {
        result.push(innerElement)
      }
    }
  
    return result
  }
  
  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])