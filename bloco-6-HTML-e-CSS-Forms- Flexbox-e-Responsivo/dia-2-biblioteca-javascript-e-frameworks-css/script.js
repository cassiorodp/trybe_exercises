const selectState = document.querySelector('#select-state');
const stateArray = ['Acre', 'Alagoas', "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"];
const stateObject = {'AC': 'Acre','AL': 'Alagoas','AP': 'Amapá', 'AM': 'Amazonas', 'BA': 'Bahia','CE': 'Ceará','DF': 'Distrito Federal','ES': 'Espírito Santo','GO': 'Goías','MA': 'Maranhão','MT': 'Mato Grosso','MS': 'Mato Grosso do Sul','MG': 'Minas Gerais',
'PA': 'Pará','PB': 'Paraíba','PR': 'Paraná','PE': 'Pernambuco','PI': 'Piauí','RJ': 'Rio de Janeiro','RN': 'Rio Grande do Norte','RS': 'Rio Grande do Sul',
'RO': 'Rondônia','RR': 'Roraíma','SC': 'Santa Catarina','SP': 'São Paulo',
'SE': 'Sergipe','TO': 'Tocantins'};

for (let key in stateObject) {
  let option = document.createElement('option');
  option.innerHTML = stateObject[key];
  option.value = key;
  selectState.appendChild(option);
};

const jobForm = document.querySelector('#job-form');
jobForm.addEventListener('submit', (event) => {
  event.preventDefault();
})

const clear = document.querySelector('#clear');
const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');
clear.addEventListener('click', () => {
  jobForm.reset();
});

const inputName = document.querySelector('#input-name');
const jobSubmit = document.querySelector('#job-submit');
const body = document.querySelector('body');
jobSubmit.addEventListener('click', () => {
  let div = document.createElement('div');
  let p = document.createElement('p');
  p.innerHTML = `Nome: ${inputName.value}`;
  div.appendChild(p);
  body.appendChild(div);
});