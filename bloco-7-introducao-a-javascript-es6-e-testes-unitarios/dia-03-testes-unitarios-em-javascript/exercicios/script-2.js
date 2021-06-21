const assert = require('assert');
const { type } = require('os');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.strictEqual(typeof(myRemove), 'function', 'Insert function');
assert.deepStrictEqual(myRemove([1, 2, 3 ,4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const myList = [3, 6, 9, 10];
myRemove(myList, 10);
assert.deepStrictEqual(myList, [3, 6, 9, 10]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
