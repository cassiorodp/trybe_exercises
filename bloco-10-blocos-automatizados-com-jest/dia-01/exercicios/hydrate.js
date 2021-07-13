const hydrate = (string) => {
  const int = string.match(/[0-9]+/g);
  let sum = 0;
  int.forEach((number) => sum += Number(number))
  return sum === 1 ? `${sum} copo de água` : `${sum} copos de água`
}

module.exports = hydrate;