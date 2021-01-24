const chalk = require("chalk")

class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  speak(){
    console.log(chalk.keyword(this.color)(this.name))
  }
}

module.exports = Person