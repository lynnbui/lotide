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

const letterPositions = (sentence) => {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        continue;
      }
  
      if (sentence[i] in results) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
    return results;
  };
  
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('hello').h, [0])
assertArraysEqual(letterPositions('hello').l, [2, 3])
assertArraysEqual(letterPositions('hello').o, [4])