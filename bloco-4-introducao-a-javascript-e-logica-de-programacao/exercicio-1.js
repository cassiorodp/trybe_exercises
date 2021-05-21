//Exercicio 1
// let n = 5;
// let symbol = '*';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   symbol = symbol + '*'
// }
// for (let index = 0; index < n; index += 1) {
//   console.log(symbol)
  
// }

//Exercicio 2

// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//   console.log(inputLine);
//   inputLine = inputLine + symbol;
// };

//Exercicio 3


// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };

//Exercicio 4


// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };