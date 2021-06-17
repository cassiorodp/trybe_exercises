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
