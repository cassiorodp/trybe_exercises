const fetch = require('node-fetch')

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

fetchDog().then(response => console.log(response.message))
module.exports = { fetchDog };