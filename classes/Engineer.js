const inquirer = require('inquirer')
const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor() {
        super();
        this.github = '';
        this.role = 'Engineer';
    }

    askGitHub() {
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
            .then(() => this.askGitHub())
            .catch(error => console.error(error));   
        }
    }
}

module.exports = Engineer