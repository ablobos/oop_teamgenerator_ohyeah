const inquirer = require('inquirer');
const Employee = require('../classes/Employee.js')

test('function should create an employee object', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        name: 'A.B. Lobos',
        email: 'ablobos@outlook.com',
    }));

const employee = new Employee()
await employee.getEmployee()
expect(employee).toBeInstanceOf(Employee);

spy.mockRestore();
})

test('function should update name property of employee', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        name: 'A.B. Lobos',
    }));

    const employee = new Employee()
    await employee.askName()
    expect(employee.name).toBe('A.B. Lobos');

    spy.mockRestore();
})

test('function should update email property of employee', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        email: 'ablobos@outlook.com',
    }));

    const employee = new Employee()
    await employee.askEmail()
    expect(employee.email).toBe('ablobos@outlook.com');
    expect(employee.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    spy.mockRestore();
})

test('function should validate email property', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        email: 'ablobos@outlook.com',
    }));
    const employee = new Employee()
    await employee.askEmail()
    expect(employee.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    spy.mockRestore();
})

test('function should validate email property', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        email: 'ablobosoutlook.com',
    }));
    const employee = new Employee()
        await employee.askEmail()
        expect(employee.email).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    
        spy.mockRestore();
})
