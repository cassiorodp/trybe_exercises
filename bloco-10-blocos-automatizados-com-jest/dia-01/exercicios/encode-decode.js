function encode(stringEncode) {
  let encodeString = '';
  let encodeO = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let indexE = 0; indexE < stringEncode.length; indexE += 1) {
    if (encodeO[stringEncode[indexE]] === undefined) {
      encodeString += stringEncode[indexE];
    } else {
      encodeString += encodeO[stringEncode[indexE]];
    }
  }
  return encodeString;
}

function decode(stringDecode) {
  let decodeString = '';
  let decodeO = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let indexD = 0; indexD < stringDecode.length; indexD += 1) {
    if (decodeO[stringDecode[indexD]] === undefined) {
      decodeString += stringDecode[indexD];
    } else {
      decodeString += decodeO[stringDecode[indexD]];
    }
  }
  return decodeString;
}

const functions = {encode, decode}

module.exports = functions;