console.log(document.querySelector('#primeiroFilhoDoFilho'));
document.querySelector('#primeiroFilhoDoFilho').innerText = 'oi';
console.log(document.querySelector('#pai').firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
console.log(document.querySelector('#pai').lastElementChild.lastElementChild);