const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76
// console.log(...patientInfo);


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Melancia', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Creme de leite', 'Leite em pó'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

// console.log(fruitSalad(specialFruit, additionalItens));

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value
};

console.log(multiply(8));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88