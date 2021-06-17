// Parte 2 (3/4)
const clickMe = document.querySelector('button');
const divCounter = document.querySelector('#counter');
let counter = 0;
clickMe.addEventListener('click', () => {
  counter += 1 ;
  divCounter.innerHTML = counter;
});
