const fs = require('fs');

const escreveArquivo = (fileName, text) => {
  try {
    fs.writeFileSync(fileName, text)
    return 'ok'
  } catch(err) {
    return null
  }
}

module.exports = escreveArquivo;