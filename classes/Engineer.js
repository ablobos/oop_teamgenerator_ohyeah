const inquirer = require('inquirer')
const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor() {
        super();
        this.github = '';
        this.role = 'Engineer';
    }

    askGithub() {
        return inquirer.prompt({
            type: 'input',
            name: 'github',
            message: 'What is your Github name?',
        }).then(answer => {
            this.github = answer.github;
        }).catch(error => {
            console.error(error);
        });
    }
    getEmployee() {
        if (this.name === '' && this.email === '' && this.github === '') {
            return this.askName()
            .then(() => this.askEmail())
            .then(() => this.askGithub())
            .catch(error => console.error(error));   
        }
    }
}

module.exports = Engineer