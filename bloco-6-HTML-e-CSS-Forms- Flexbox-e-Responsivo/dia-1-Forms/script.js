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

// for (let index = 0; index < stateArray.length; index += 1) {
//   let option = document.createElement('option');
//   option.innerHTML = stateArray[index];
//   selectState.appendChild(option);
// };