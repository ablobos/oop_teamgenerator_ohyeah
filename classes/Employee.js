const inquirer = require('inquirer')

class Employee {
    constructor() {
        this.name = '';
        this.email = '';
        this.role = 'Employee';
    }
//prompt questions
    askName() {
        return inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Please enter your name?',
        }).then(answer => {
            this.name = answer.name;
        }).catch(error => {
            console.error(error);
        });
    }

    askEmail() {
        return inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate(value) {
                const pass = value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email!';
            }
        }).then(answer => {
            this.email = answer.email;
        }).catch(error => {
            console.error(error);
        });
    }

    getEmployee() {
        if (this.name === '' && this.email === '') {
            return this.askName()
            .then(() => this.askEmail())
            .catch(error => console.error(error));
        }
    }
}

module.exports = Employee