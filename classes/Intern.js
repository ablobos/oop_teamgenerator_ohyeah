const inquirer = require('inquirer')
const Employee = require('./Employee.js')

class Intern extends Employee {
  constructor() {
    super();
    this.intern_number = null;
    this.role = 'Intern';
  }

  askInternNumber() {
    return inquirer.prompt({
      type: 'input',
      name: 'intern_number',
      message: 'What is your intern number?',
      validate(value) {
        const pass = value.match(/^[0-9]*[1-9][0-9]*$/);
        if(pass) {
          return true;
        }
        return 'Please enter a valid number';
      }
    }).then(answer => {
      this.intern_number = answer.intern_number;
    }).catch(error => {
      console.error(error);
    });
  }

  getEmployee() {
    if (this.name === '' && this.email === '' && this.intern_number === null) {
      return this.askName()
        .then(() => this.askEmail())
        .then(() => this.askInternNumber())
        .catch(error => console.error(error));
    }
  }
}


module.exports = Intern