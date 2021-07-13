function techList(techNames, name) {
  let techObject = {};
  let techArray = [];
  if (techNames[0] === undefined) {
    return 'Vazio!';
  }
  for (let index of techNames) {
    techObject['tech'] = index;
    techObject['name'] = name;
    techArray.push(techObject);
    techObject = {};
  }
  return techArray.sort(function (a, b) {
    if (a.tech.toLowerCase() < b.tech.toLowerCase()
    ) return -1;
    if (a.tech.toLowerCase() > b.tech.toLowerCase()
    ) return 1;
    return 0;
  });
}

module.exports = techList;