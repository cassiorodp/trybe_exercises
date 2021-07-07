// const newPromise = () => {
//   return new Promise ((resolve, reject) => {
//     const newArray = [];
//     for (let index = 1; index <= 10; index += 1) {
//       newArray.push((Math.floor((Math.random() * 51)) ** 2));
//     };
//     const sumArray = newArray.reduce((acc, current) => acc + current);

//     (sumArray < 8000) ? resolve(sumArray) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
//   })
// }

// newPromise()
//   // .then((msg) => console.log(msg))
//   .then((sum) => [2, 3, 5, 10].map(number => sum / number))
//   .then((array) => array.reduce((acc, number) => acc + number, 0))
//   .catch((error) => console.log(error));

const sumRandomNumbers = () => {
  const newArray = [];
  for (let index = 1; index <= 10; index += 1) {
    newArray.push((Math.floor((Math.random() * 51)) ** 2));
  };
  const sumArray = newArray.reduce((acc, current) => acc + current);
  if (sumArray < 8000) {
    return sumArray
  }
  throw new Error();
  }

  const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((acc, number) => acc + number, 0);
  
const fetchPromisse = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    console.log(sumFromSum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromisse()