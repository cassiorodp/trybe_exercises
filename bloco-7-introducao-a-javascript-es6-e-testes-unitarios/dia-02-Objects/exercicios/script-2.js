const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Parte 1
const addTurn = (object, key, keyValue) => {
  object[key] = keyValue;
  return object
}
// console.log(addTurn(lesson2, Object.keys(lesson1)[3], lesson1.turno));

//Parte 2
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson1));

//Parte 3
const objectLength = (object) => Object.keys(object).length;
// console.log(objectLength(lesson2));

//Parte 4
const objectValues = (object) => Object.values(object);
// console.log(objectValues(lesson1));

//Parte 5
const allLessons = {};
allLessons['lesson1'] =  Object.assign({}, lesson1);
allLessons['lesson2'] = Object.assign({}, lesson2);
allLessons['lesson3'] = Object.assign({}, lesson3);

console.log(allLessons);

//Parte 6
const sumStudents = () => {
  let sum = 0;
  sum += allLessons['lesson1']['numeroEstudantes'];
  sum += allLessons.lesson2.numeroEstudantes;
  sum += allLessons.lesson3.numeroEstudantes;
  return sum
};
console.log(`Numero total de estudantes: ${sumStudents()}`);

//Parte 7
const getValueByNumber = (object, position) => {
  return Object.entries(object)[position][1];

}
console.log(getValueByNumber(lesson1, 0));

//Parte 8
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

//Bonus

//Parte 1
const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudents(allLessons));

//Parte 2
const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));