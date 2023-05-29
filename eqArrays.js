const assertEqual = function(actual, expected) {
    if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  };

const eqArrays = (actual, expected) => {
    if (actual.length !== expected.length) return false;
  
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }
    return true;
  };
  
  eqArrays([1, 2, 3], [1, 2, 3]); // => true
  eqArrays([1, 2, 3], [3, 2, 1]); // => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
  
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
