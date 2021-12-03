/* fs-utils.js */
const fs = require('fs/promises');

async function getSimpsons () {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  return JSON.parse(fileContent);
}

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };