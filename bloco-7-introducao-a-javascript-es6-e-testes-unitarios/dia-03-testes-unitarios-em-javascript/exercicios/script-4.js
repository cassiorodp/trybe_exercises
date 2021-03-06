const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(typeof(myFizzBuzz), 'function');
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Expected fizzbuzz');
assert.strictEqual(myFizzBuzz(6), 'fizz', 'Expected fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Expected buzz');
assert.strictEqual(myFizzBuzz(11), 11, 'Expected input value');
assert.strictEqual(myFizzBuzz('10'), false, 'Expected false');

