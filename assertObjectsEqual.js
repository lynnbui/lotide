const eqArrays = (actual, expected) => {
    if (actual.length !== expected.length) return false;
  
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }
    return true;
};
  
const eqObjects = (object1, object2) => {
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

const assertObjectsEqual = (actual, expected) => {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
  
  assertObjectsEqual({ b: 2, a: '1' }, { a: '1', b: 2 })