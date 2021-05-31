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
const buttonFriday = document.createElement('button');
function friday (friday) {
  let divButton = document.querySelector('.buttons-container');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerHTML = friday;
  divButton.appendChild(buttonFriday);
}
friday('Sexta-Feira');

// Exercicio 5


let message = 'Bora beber';
let fridays = document.querySelectorAll('.friday');
let fridaysArray = [ 4, 11, 18, 25 ];
buttonFriday.addEventListener('click', function () {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== message) {
      fridays[index].innerHTML = message;
    } else {
      fridays[index].innerHTML = fridaysArray[index];
    }
  }
})

// Exercicio 6
let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '600';
  })

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })

// Exercicio 7

function newTask (task) {
  let taskConteiner = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  taskConteiner.appendChild(taskName);
}
newTask('Projeto: teste');

// Exercicio 8

function taskColor (color) {
  let taskDiv = document.createElement('div');
  let getDivTask = document.querySelector('.my-tasks');

  taskDiv.classList.add('task');
  taskDiv.style.backgroundColor = color;
  getDivTask.appendChild(taskDiv);
}

taskColor('purple');

// Exercicio 9

function setTaskClass () {
  let selectedTask = document.getElementsByClassName ('task selected');
  let myTask = document.querySelector('.task');

  myTask.addEventListener('click', function(event) {
    if (selectedTask.length === 0 ) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}

setTaskClass ();

// Exercicio 10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length > 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();