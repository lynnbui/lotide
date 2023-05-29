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
  
  assertArraysEqual([1,2,3], [1,2,3]);
  assertArraysEqual([1,2,3], [1,2,'3']);