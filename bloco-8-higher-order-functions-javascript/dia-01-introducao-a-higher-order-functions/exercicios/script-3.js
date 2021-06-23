const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answersChecker = (answer1, answer2) => {
  let total = 0;
  for (let index = 0; index < answer1.length; index += 1) {
    if (answer1[index] === answer2[index]) {
      total += 1;
    } else if (answer1[index] === 'N.A' || answer2[index] === 'N.A') {
      total += 0;
    } else {
      total -= 0.5;
    };
  };
  return total;
}


const countAnswers = (rightAnswers, studentAnswers, pontuation) => pontuation(rightAnswers, studentAnswers);
console.log(countAnswers(rightAnswers, studentAnswers, answersChecker));