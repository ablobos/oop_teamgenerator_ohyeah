const express = require('express');
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const app = express();
const everyone = [];

app.set('view engine', 'pug');
app.set('views', './views');

let manager = null;
let intern = null;
let engineer = null;

//questions
const promptManagerDetails = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the manager\'s name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the manager\'s ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the manager\'s email address:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the manager\'s office number:',
    },
  ]);
};

const promptAddEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Choose the employee\'s role:',
      choices: ['Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the employee\'s name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the employee\'s ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the employee\'s email address:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the engineer\'s GitHub username:',
      when: (answers) => answers.role === 'Engineer',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the intern\'s school name:',
      when: (answers) => answers.role === 'Intern',
    },
    {
      type: 'confirm',
      name: 'addAnother',
      message: 'Would you like to add another employee?',
      default: false,
    },
  ]);
};

const startApp = async () => {
  try {
    manager = new Manager();
    const managerDetails = await promptManagerDetails();
    await manager.setEmployee(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber);
    everyone.push(manager);

    while (true) {
      const { role, name, id, email, github, school, addAnother } = await promptAddEmployee();

      if (role === 'Engineer') {
        engineer = new Engineer();
        await engineer.setEmployee(name, id, email, github);
        everyone.push(engineer);
      } else {
        intern = new Intern();
        await intern.setEmployee(name, id, email, school);
        everyone.push(intern);
      }

      if (!addAnother) {
        break;
      }
    } //creating html
    const templatePath = path.join(__dirname, 'views', 'employees.pug');
    const outputPath = path.join(__dirname, 'dist', 'index.html');
    const compiledFunction = pug.compileFile(templatePath);
    const html = compiledFunction({ everyone: everyone });
    const distPath = path.join(__dirname, 'dist');
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath);
    }
    fs.writeFileSync(outputPath, html);
    console.log(`HTML file generated at ${outputPath}`);

  } catch (error) {
    console.error(error);
  }
};

startApp();

