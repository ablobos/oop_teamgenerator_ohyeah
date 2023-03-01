const Employee = require('./Employee.js')

class Intern extends Employee {
  constructor() {
    super();
    this._intern_school = '';
    this.role = 'Intern';
  }

  get school() {
    return this._intern_school
 }

 set school(value) {
    this._intern_school = value
 }

 setEmployee(name, id, email, intern_school) {
    this._name = name
    this._id = id
    this._email = email
    this._intern_school = intern_school
 }
}


module.exports = Intern