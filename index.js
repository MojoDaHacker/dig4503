const axios = require("axios") // require axios library to use in file

axios('https://pokeapi.co/api/v2/pokemon/golduck') // send a request to pokemon api for the resource of golduck
.then(function (response) {   // when promises is resolved take resolved response
  console.log(response.data)  // log the data aboject of the response
})
.catch(function (error) { // catch any errors thrown from sending the request or receiving the response
  console.log("Error: " + error); // log the err to console
});