// 1
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
let body = document.querySelector('body');
body.appendChild(h1);
// 2
let div = document.createElement('div');
div.className = 'main-content';
body.appendChild(div);
// 3
let divSon = document.createElement('div');
divSon.className = 'center-content';
div.appendChild(divSon);
// 4
let p = document.createElement('p');
p.innerHTML = 'Teste Trybe';
divSon.appendChild(p);
// 5
let divLeft = document.createElement('div');
divLeft.className = 'left-content';
div.appendChild(divLeft);
// 6
let divRight = document.createElement('div');
divRight.className = 'right-content';
div.appendChild(divRight);
// 7
let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
divLeft.appendChild(img);
// 8
let unorderedList = document.createElement('ul');
divRight.appendChild(unorderedList);
for (let index = 1; index < 11; index += 1) {
  let unorderedListItens = document.createElement('li');
  unorderedListItens.innerHTML = index;
  unorderedList.appendChild(unorderedListItens);
}
// 9
for (let index = 0; index < 3; index += 1) {
  let h3 = document.createElement('h3');
  div.appendChild(h3);
}