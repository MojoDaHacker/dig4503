import Express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = Express();
const port = 3010;

const fileContents = fs.readFileSync('database.json')
const db = JSON.parse(fileContents)

app.use(cors())
app.use('/', Express.static('client/build'))

app.post('/employees/:name/:age', (req, res) => {
  var recordCreated = {error: 'record not created'}
  req.params.age = parseInt(req.params.age)
  db.push(req.params)
  recordCreated = req.params
  fs.writeFileSync('database.json', JSON.stringify(db, null, '\t'))
  res.json(recordCreated) 
})
app.get('/employees/:name', (req, res) => {
  var foundMatch = {error: 'record not found'}
  db.forEach(({name, age}) => {
    if (name === req.params.name) {
      foundMatch = {name: name, age: age}
    }
  }); 
  res.json(foundMatch) 
})
app.get('/age/:number', (req, res) => {
  var foundMatch = {error: 'record not found'}
  db.forEach(({name, age}) => {
    if (age == req.params.number) {
      foundMatch = {name: name, age: age}
    }
  });  
  res.json(foundMatch) 
})

app.listen(port, () => console.log("App listening..."))
