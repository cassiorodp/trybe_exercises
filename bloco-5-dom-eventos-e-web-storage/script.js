function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1

function createDays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    const daysUL = document.querySelector('#days');
    const daysList = document.createElement('li');
    if (index === 25 || index === 26 || index === 32) {
      daysList.classList.add('holiday');
    }
    if (index === 5 || index === 12 || index === 19 || index === 26) {
      daysList.classList.add('friday');
    }
    daysList.classList.add('day');
    daysList.innerHTML = days;
    daysUL.appendChild(daysList);
  }
}

createDays();

// Exercicio 2

function feriado (feriados) {
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = feriados;
  let divButton = document.querySelector('.buttons-container');
  divButton.appendChild(button);
}
feriado('Feriados');

// Exercicio 3

let button = document.querySelector('#btn-holiday')
let backgroundColor = 'purple';
button.addEventListener('click', function () {
  let holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === backgroundColor) {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)'
    } else {
      holidays[index].style.backgroundColor = backgroundColor;
    }
  }
});

// Exercicio 4

function friday (friday) {
  let divButton = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = friday;
  divButton.appendChild(button);
}
friday('Sexta-Feira');