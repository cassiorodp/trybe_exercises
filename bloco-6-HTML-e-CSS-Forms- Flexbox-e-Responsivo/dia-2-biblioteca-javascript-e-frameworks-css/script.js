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

let picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'M/D/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

