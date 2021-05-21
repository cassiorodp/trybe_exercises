let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
// for (index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

//Exercicio 2
// let soma = 0;

// for (index = 0; index < numbers.length; index += 1) {
// soma += numbers[index];
// }
// console.log(`Soma igual a ${soma}`);

//Exercicio 3
// let media = 0;
// let soma = 0;

// for (index = 0; index < numbers.length; index += 1) {
// soma += numbers[index];
// }
// media = soma / numbers.length;
// console.log(`A media e: ${media}`); 

//Exercicio 4
// let media = 0;
// let soma = 0;

// for (index = 0; index < numbers.length; index += 1) {
// soma += numbers[index];
// }
// media = soma / numbers.length;
// if (soma > 20) {
//   console.log(`valor maior que 20`);
// }
// else {
//   console.log(`valor menor ou igual a 20`);
// }

//Exercicio 5
let maiorNumero = [];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index]
  }
}
console.log(`maior numero: ${maiorNumero}`);

//Exercicio 6
// let oddNumbers = 0; 

// for (let index = 0; index < numbers.length; index += 1) {
//   if ((numbers[index] % 2) != 0) {
//     oddNumbers += 1;
//   }
// }
// if (oddNumbers > 0) {
//   console.log(`numeros impares: ${oddNumbers}`);
// }
// else {
//   console.log(`nenhum valor impar encontrado`);
// }

//Exercicio 7
// let menorNumero = numbers[(numbers.length - 1)];

// for (index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < menorNumero) {
//     menorNumero = numbers[index]
//   }
// }
// console.log(`menor numero: ${menorNumero}`);

//Exercicio 8
// let contador = [];

// for (index = 0; index <= 25; index +=1) {
//   contador.push(index);
// }
// console.log(contador);

//Exercicio 9
// let contador = [];

// for (let index = 0; index <= 25; index +=1) {
//   contador.push(index);
// }
// for (let indexDivisao = 0; indexDivisao < contador.length; indexDivisao += 1 ) {
//   console.log((contador[indexDivisao] / 2));
// }

//Bonus

//ORDEM CRESCENTE
// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers)

//ORDEM DECRESCENTE
// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers);

//MULTIPLICACAO
// let newNumbers = [];

// for (index = 0; index < numbers.length; index += 1) {
//   if (index + 1 < numbers.length) {
//     newNumbers.push(numbers[index] * numbers[index +1])
//     }
//     else {
//       newNumbers.push(numbers[index] * 2)
//     }
//   }
// console.log(newNumbers);



//Anotacao do bonus
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [3, 5, 9, 19, 70, 8, 100, 2, 35, 27];
// index = 2 / index[2] = 3
//secondIndex = 0 / secondIndex[0] = 5
// position = index[2] = 3

// index = 2 / index[2] = 5
//secondIndex = 1 / secondIndex[1] = 9
// position = index[2] = 5