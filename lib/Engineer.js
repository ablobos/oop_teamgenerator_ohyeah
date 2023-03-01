const inquirer = require('inquirer')
const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor() {
        super();
        this._github = '';
        this.role = 'Engineer';
    }

    get gitHub() {
        return this._github
    }

    set gitHub(value) {
        this._github = value
    }
    
    setEmployee(name, id, email, github) {
       this._name = name
       this._id = id
       this._email = email
       this._github = github  
      }
    }

module.exports = Engineer