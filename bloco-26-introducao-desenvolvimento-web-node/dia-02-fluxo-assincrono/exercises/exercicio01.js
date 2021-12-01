const fs = require('fs').promises;
// Exercicio 01
function operacao(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
      reject(new Error("Informe apenas números"))
    };
    const resultado = (num1 + num2) * num3;
    if (resultado < 50) reject(new Error("Valor muito baixo"));
    resolve(resultado)
  })
}

// Exercicio 02
// function main () {
//   const randomNumber = () => Math.floor(Math.random() * 100 + 1);
//   operacao(randomNumber(), randomNumber(), randomNumber())
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// }

// Exercicio 03
// async function main () {
//   const randomNumber = () => Math.floor(Math.random() * 100 + 1);
//   try {
//     const response = await operacao(randomNumber(), randomNumber(), randomNumber());
//     console.log(response);
//   } catch(err) {
//     console.log(err);
//   }
// }

// Exercicio 04 - 01
// async function main() {
//   try {
//     const responseString = await fs.readFile('simpsons.json', "utf8");
//     const responseParse = JSON.parse(responseString)
//     responseParse.forEach(({ id, name }) => {
//       console.log(`${id} - ${name}`);
//     })
//   } catch(err) {
//     console.log(err);
//   }
// }

// Exercicio 04 - 02
// function findCharacter(data, input_id) {
//   return new Promise((resolve, reject) => {
//     const character = data.find(({id}) => input_id === parseInt(id));
//     if (!character) reject(new Error("id não encontrado"))
//     resolve(character)
//   })
// }

// async function main(input_id) {
//   try {
//     const responseString = await fs.readFile('simpsons.json', "utf8");
//     const responseParse = JSON.parse(responseString);
//     const character = await findCharacter(responseParse, input_id);
//     console.log(character);
//   } catch(err) {
//     console.log(err);
//   }
// }
// const id = 10
// main(id);

// Exercicio 04 - 03
// function deleteId(data, input_id) {
//   let newJSON = data; 
//   input_id.forEach((element) => {
//     newJSON = newJSON.filter(({id}) => element !== parseInt(id))
//   });
//    return newJSON;
// }

// async function main(input_id) {
//   try {
//     const responseString = await fs.readFile('simpsons.json', "utf8");
//     const responseParse = JSON.parse(responseString);
//     const filteredArray = deleteId(responseParse, input_id);
//     const filteredArrayString = JSON.stringify(filteredArray)
//     fs.writeFile('simpsons.json', filteredArrayString);
//   } catch(err) {
//     console.log(err);
//   }
// }
// const id = [10, 6]
// main(id);

// Exercicio 04 - 04
// function filterArray(data) {
//   let newJSON = [];
//   for (let i = 1; i <= 4; i += 1) {
//     newJSON.push(...data.filter(({id}) => parseInt(id) === i))
//   }
//   return newJSON
// }

// async function main() {
//   try {
//     const responseString = await fs.readFile('simpsons.json', "utf8");
//     const responseParse = JSON.parse(responseString);
//     const filteredArray = filterArray(responseParse);
//     const filteredArrayString = JSON.stringify(filteredArray)
//     fs.writeFile('simpsonFamily.json', filteredArrayString);
//   } catch(err) {
//     console.log(err);
//   }
// }

// main();

// Exercicio 04 - 05
function filterArray(data) {
  let newJSON = [];
  for (let i = 1; i <= 4; i += 1) {
    newJSON.push(...data.filter(({id}) => parseInt(id) === i))
  }
  return newJSON
}

async function main() {
  try {
    const responseString = await fs.readFile('simpsonFamily.json', "utf8");
    const responseParse = JSON.parse(responseString);
    const filteredArray = filterArray(responseParse);
    const filteredArrayString = JSON.stringify(filteredArray)
    fs.writeFile('simpsonFamily.json', filteredArrayString);
  } catch(err) {
    console.log(err);
  }
}

main();