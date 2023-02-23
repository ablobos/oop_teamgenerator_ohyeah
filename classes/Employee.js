const inquirer = require('inquirer')

class Employee {
    constructor() {
        this.name = '';
        this.email = '';
        this.role = 'Employee';
    }

    askName() {
        return inquirer.createPromptModule({
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        }).then(answer => {
            this.name = answer.name;
        }).catch(err => {
        });
    }

    askEmail() {
        return inquirer.prompt( {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate(value) {
                const pass = value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email';
            }
        })
    }

}