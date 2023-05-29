const assertEqual = (actual, expected) => {
    if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (input) => {
    const result = {};
    for (const letter of input) {
      if (letter === ' ') {
        continue;
      }
      if (letter in result) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
    return result;
};
  
console.log(countLetters('lighthouse in the house'));