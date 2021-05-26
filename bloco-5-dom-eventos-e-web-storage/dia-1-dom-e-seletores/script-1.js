function changeParagraph (string) {  let tag = document.getElementsByTagName('p');
  for (let i = 0; i < tag.length; i += 1) {
    tag[i].innerText = string;
  }
}
changeParagraph('Teste');

function changeBackgroundColor (backgroundColor) {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = backgroundColor;
}
changeBackgroundColor('rgb(76,164,109)');

function changeCenterBackgroundColor (centerBackgroundColor) {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = centerBackgroundColor;
}
changeCenterBackgroundColor('white');

function corretTitle (correction) {
  document.getElementsByClassName('title')[0].innerText = correction;
}
corretTitle ('Exercício 5.1 - JavaScript');

function upperCase () {
  for (let i = 0; i < document.getElementsByTagName('p').length; i += 1) {
    document.getElementsByTagName('p')[i].style.textTransform = 'uppercase';
  }
}
upperCase();

function print () {
  for (let i = 0; i < document.getElementsByTagName('p').length; i += 1) {
    console.log(document.getElementsByTagName('p')[i].innerHTML);
  }
}
print();
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
// Crie uma função que mude a cor do quadrado vermelho para branco.
// Crie uma função que corrija o texto da tag <h1>.
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
// document.getElementById();
// document.getElementsByClassName();
