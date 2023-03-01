const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor() {
        super();
        this._office_number = null;
        this._role = 'Manager';
    }

    get OfficeNumber() {
        return this._office_number
     }
     set officeNumber(value) {
        this._office_number = value
     }
     setEmployee(name, id, email, officeNumber) {
        this._name = name
        this._id = id
        this._email = email
        this._office_number = officeNumber
     }
}

module.exports = Manager