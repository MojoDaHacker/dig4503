import Express from 'express'
import fs from 'fs'

const app = Express();
const port = 3010;

const fileContents = fs.readFileSync('database.json')
const db = JSON.parse(fileContents)


app.get('/employees/:name', (req, res) => {
  var foundMatch = {error: 'not found'}
  db.forEach(({name, age}) => {
    if (name === req.params.name) {
      foundMatch = {name: name, age: age}
    }
  }); 
  res.json(foundMatch) 
})
app.get('/age/:number', (req, res) => {
  var foundMatch = {error: 'not found'}
  db.forEach(({name, age}) => {
    if (age == req.params.number) {
      foundMatch = {name: name, age: age}
    }
  });  
  res.json(foundMatch) 
})

app.listen(port, () => console.log("App listening..."))
