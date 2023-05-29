const assertEquals = function(actual, expected) {
    if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
  
const eqArrays = function(actual, expected) {
    if (actual.length !== expected.length) return false;
  
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }
    return true;
};
  
const eqObjects = function(object1, object2) {
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
  
    if (object1Keys.length !== object2Keys.length) return false;
  
    for (const key of object1Keys) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            eqArrays(object1[key], object2[key]);
        } else if (object1[key] !== object2[key]) return false;
}
  
    for (const key of object2Keys) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            eqArrays(object1[key], object2[key]);
        } else if (object1[key] !== object2[key]) return false;
    }
  
    return true;
};
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEquals(eqObjects(shirtObject , anotherShirtObject), true);
  
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);
  
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);