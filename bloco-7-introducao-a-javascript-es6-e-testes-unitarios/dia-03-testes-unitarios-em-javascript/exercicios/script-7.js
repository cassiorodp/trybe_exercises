const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  const wordsLength = [];
  for (let index = 0; index < words.length; index += 1) {
    let length = 0;
    length = words[index].length;
    wordsLength.push(length);
  };
  return wordsLength;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
