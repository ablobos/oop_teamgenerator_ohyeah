const express = require('express')
const Employee = require('./classes/Employee')
const Intern = require('./classes/Intern')
const Manager = require('./classes/Manager')
const Engineer = require('./classes/Engineer')

const app = express();
const everyone =[];

app.set('view engine', 'pug');
app.set('views', './views');

let engineer = new Engineer();
let manager = new Manager();
let employee = new Employee();
let intern = new Intern();

engineer.getEmployee()
  .then(() => manager.askOffice())
  .then(() => manager.getEmployee())
  .then(() => employee.getEmployee())
  .then(() => intern.getEmployee())
  .then(() => {
    everyone.push(engineer, manager, employee, intern);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('You can view the employee data here http://localhost:3000/');
    app.get('/', (req, res) => {
      res.render('employees', {everyone: everyone});
    });

    app.listen(3000);
  });