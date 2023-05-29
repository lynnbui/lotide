const assertEqual = (actual, expected) => {
    if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = (allItems, itemsToCount) => {
    const result = {};
    for (const key in itemsToCount) {
      if (itemsToCount[key]) {
        let count = 0;
        for (const item of allItems) {
          if (item === key) {
            count++;
          }
        }
        if (count > 0) {
          result[key] = count;
        }
      }
    }
    return result;
};
  
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);