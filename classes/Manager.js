const inquirer = require('inquirer')
const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor() {
        super();
        this.office_number = 'null';
        this.role = 'Manager';
    }

    askOffice() {
        return inquirer.prompt({
            type: 'input',
            name: 'office_number',
            message: 'Manager: What is your office number?',
            validate(value) {
                const pass = value.match(/^[0-9]*[1-9][0-9]*$/);
                if(pass) {
                    return true;
                }
                return 'Please enter a valid number';
                }
        }).then(answer => {
            this.office_number = answer.office_number;
        }).catch(error => {
            console.error(error);
        });
    }
    getEmployee() {
        if (this.name === '' && this.email === '' && this.github === '') {
            return this.askName()
            .then(() => this.askEmail())
            .then(() => this.askOffice())
            .catch(error => console.error(error));   
        }
    }
}

module.exports = Manager