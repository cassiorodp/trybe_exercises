const employeesId = (employeeName) => {
  const email = employeeName.toLowerCase().split(' ').join('_');
  return {
    name: employeeName,
    email: `${email}@trybe.com`
  }
}

const newEmployees = () => {
  const employees = {
    id1: employeesId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees());
