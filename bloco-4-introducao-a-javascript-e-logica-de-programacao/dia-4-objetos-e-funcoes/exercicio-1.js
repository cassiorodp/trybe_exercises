let infoMargarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log(`Bem-vinda, ${info.personagem}`);

infoMargarida.recorrente = 'Sim';

// console.log(info);

// for (let key in info) {
//   console.log(key);
// }

// for (let key in info) {
//   console.log(info[key]);
// }

// Segundo objeto
let infoTio = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in infoMargarida) {
  if (infoMargarida[key] === infoMargarida.recorrente && infoMargarida[key] === 'Sim' && infoTio.recorrente === 'Sim') {
    console.log(`Ambos recorrentes`);
  }
  else {
    console.log(`${infoMargarida[key]} e ${infoTio[key]}`);
  }
}