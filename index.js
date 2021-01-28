const axios = require("axios")

axios('https://pokeapi.co/api/v2/pokemon/golduck')
.then(function (response) {
  console.log(response.data)
})
.catch(function (error) {
  console.log("Error: " + error);
});