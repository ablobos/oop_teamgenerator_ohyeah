const express = require('express')
const Employee = require('./classes/Employee')
const Manager = require('./classes/Manager')
const Engineer = require('./classes/Engineer')

const app = express();
const everyone =[];

app.set('view engine', 'pug');
app.set('views', './views');

let engineer = new Engineer();
let manager = null
let employee = null
engineer.getEmployee()
  .then(() => {
    everyone.push(engineer);
    everyone.push(engineer);

    manager = new Manager();
    return manager.getEmployee();
  })
  .then(() => {
    everyone.push(manager);
  })

  





/*function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
      console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
    };
  }

  const rita = new Developer('Rita', 'JavaScript');

  const person = {
    name: 'Eric',
    age: 28,
    occupation: 'Full-Stack Web Developer',
  };
  
  console.log(person.occupation.toLowerCase());*/