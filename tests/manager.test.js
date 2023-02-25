const inquirer = require('inquirer');
const Manager = require('../classes/Manager.js');

test('function should return expected output', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        name: 'A.B. Lobos',
        email: 'ablobos@outlook.com',
        office_number: 10
    }));

    const manager = new Manager()
    await manager.getEmployee()
    expect(manager).toBeInstanceOf(Manager);

    spy.mockRestore();
})

test('function should update office number property', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        office_number: 9,
    }));

    const manager = new Manager()
    await manager.askOffice()
    expect(manager.office_number).toBe(9)

    spy.mockRestore();
})