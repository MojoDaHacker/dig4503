import Express from 'express'
// import mailer from 'nodemailer'
import cors from 'cors'
import fs from 'fs'

const app = Express();
const port = 3010;

const fileContents = fs.readFileSync('database.json')
const db = JSON.parse(fileContents)

app.use(cors())
app.use('/', Express.static('client/build'))

app.post('/send_email', (req, res) => {
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "matthewmckenzie446@yahoo.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
  
  main().catch(console.error);
})
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
