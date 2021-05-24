// Tarefa 1

// function palindrome (name) {
//   let nameArray = name.split('');
//   let isPalindrome = true;
//   for (let index in name) {
//     if (name[index] != (name[(name.length - 1) - index])) {
//       isPalindrome = false
//     }
//   }
//   return isPalindrome
// }
// console.log(`É um palindromo? ${palindrome('arara')}`);

//Tarefa 2
// let test = [2, 3, 6, 7, 10, 1]

// function highValue (value) {
//   let greatValue = 0;
//   for (let index in value) {
//     if (value[index] > greatValue) {
//       greatValue = index;
//     }
//   }
//   return greatValue
// }
// console.log(highValue(test));

//Tarefa 3

// let test = [2, 4, 6, 7, 10, 0, -3]

// function highValue (value) {
//   let greatValue = 0;
//   for (let index in value) {
//     if (value[index] < greatValue) {
//       greatValue = index;
//     }
//   }
//   return greatValue
// }
// console.log(highValue(test));

//Tarefa 4

// let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function highName (name) {
//   let bigName = [''];
//   for (index in name) {
//     if (name[index].length > bigName.length) {
//       bigName = name[index];
//     }
//   }
//   return bigName;
// }

// console.log(highName(test));

//Tarefa 5
// let teste = [2, 3, 2, 5, 8, 2, 3];

// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }
// console.log(maisRepetido(teste));

//Tarefa 6

// function sumTotal (number) {
//   let sum = 0;
//   for (let index = 0; index <= number; index += 1) {
//     sum += index
//   }
//   return sum
// }

// console.log(sumTotal(5));

//Tarefa 7

//Primeira resolução
// function endWordVerifier (word, ending) {
//   word = word.split('');
//   ending = ending.split('');
//   control = true;
//   for (let index = 0; index < word.length; index += 1) {
//     if (word[word.length - ending.length + index] != ending[index]) {
//       control = false;
//     }
//   }
//   return control
// }
// console.log(endWordVerifier('trybe', 'be'));

//Segunda resolução
// function verificaFimPalavra(palavra, fimPalavra) {
//   let inversoPalavra = palavra.split('').reverse().join('');
//   let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//   let result;

//   for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//     if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//       result = false;
//       break;
//     } else {
//       result = true;
//     }
//   }
  
//   return result;
// }

