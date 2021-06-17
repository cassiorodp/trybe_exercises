// Parte 1 (1/2)
// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);
const testingScope = (escopo) => (escopo === true) ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`);

testingScope(true);

// Parte 1 (2/2)
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const orderArray = () => oddsAndEvens.sort((a, b) => a -b);
console.log(`Os números ${orderArray()} se encontram ordenados de forma crescente!`);

// Parte 2 (1/4)
const factorial = (number) => (number > 1) ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// Parte 2 (2/4)
// const longestWord = (sentence) => {
//   const sentenceSplit = sentence.split(' ');
//   let biggestWord = sentenceSplit[0];
//   for (let index = 0; index < sentenceSplit.length; index += 1) {
//     if (biggestWord.length < sentenceSplit[index].length) {
//       biggestWord = sentenceSplit[index];
//     };
//   };
//   return biggestWord
// };
// console.log(longestWord('Oi Meu Chapa'));

const longestWord = (sentence) => sentence.split(' ').sort((a, b) => b.length - a.length)[0]; 
console.log(longestWord('Oi Meu Chapa'));

// Parte 3 (4/4)
const skills = ["Android", "iOS", "Architecture", "Teach", "Run"];
const xReplace = (text) => {
  const newText = text.split('');
  for (let index = 0; index < newText.length; index += 1) {
    if (newText[index] === 'x') {
      newText[index] = 'Hello';
    }
  }
  return `Meu Novo nome é ${newText.join('')}`
};

const joinFunction = () => `${xReplace('x-men')} Minhas principais habilidades são: 
${skills.sort()[0]}
${skills.sort()[1]}
${skills.sort()[2]}
${skills.sort()[3]}
${skills.sort()[4]}`;
console.log(joinFunction());