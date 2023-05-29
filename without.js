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
  
const without = (source, itemsToRemove) => {
    let output = [];
    for (const item of source) {
      if (!itemsToRemove.includes(item)) {
        output.push(item);
      }
    }
    return output;
};
  
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);