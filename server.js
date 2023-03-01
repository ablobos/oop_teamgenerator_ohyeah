const express = require('express')
const Employee = require('./classes/Employee')
const Manager = require('./classes/Manager')
const Engineer = require('./classes/Engineer')
const Intern = require('./classes/Intern')

const app = express();
const everyone = [];

app.set('view engine', 'pug');
app.set('views', './views');

let engineer = new Engineer();
let manager = null
let employee = null
let intern = null
engineer.getEmployee()
  .then(() => {
    everyone.push(engineer);

    manager = new Manager();
    return manager.getEmployee();
  })
  .then(() => {
    everyone.push(manager);

    employee = new Employee();
    return employee.getEmployee();
  })
  .then(() => {
    everyone.push(employee);

    intern = new Intern();
    return intern.getEmployee();
  })
  .then(() => {
    everyone.push(intern);
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
