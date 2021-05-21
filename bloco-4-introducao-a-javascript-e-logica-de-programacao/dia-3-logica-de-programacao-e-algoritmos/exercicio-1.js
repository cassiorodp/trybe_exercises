// //Exercicio 1

// // let n = 5;
// // let symbol = '*';
// // let inputLine = '';

// // for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
// //   inputLine = inputLine + symbol;
// // };
// // for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
// //   console.log(inputLine);
// // };

// //Exercicio 2

// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < size; lineIndex += 1) {
//   inputLine = inputLine + symbol;
//   console.log(inputLine);
// };

// //Exercicio 3

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
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

// //Exercicio 4


// // let n = 5;
// // let symbol = '*';
// // let inputLine = '';

// // let midOfMatrix = (n + 1) / 2;
// // let controlLeft = midOfMatrix;
// // let controlRight = midOfMatrix;

// // for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
// //   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
// //     if (columnIndex > controlLeft && columnIndex < controlRight) {
// //       inputLine = inputLine + symbol;
// //     } else {
// //       inputLine = inputLine + ' ';
// //     }
// //   }
// //   console.log(inputLine);
// //   inputLine = '';
// //   controlRight += 1;
// //   controlLeft -= 1
// // };

// //Exericicio 5

// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

// //Exercicio 6


// let divisores = 0;
// let numero = 11;

// for (let contador = 2; contador <= numero; contador += 1) {
//   if (numero % contador === 0) divisores += 1;
// }

// if (divisores === 1) console.log(numero + ' é primo');
// else console.log(numero + ' não é primo');