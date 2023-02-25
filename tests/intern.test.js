const inquirer = require('inquirer');
const Intern = require('../classes/Intern.js')

test('function should create an intern object', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        name: 'A.B. Lobos',
        email: 'ablobos@outlook.com',
        intern_number: 10
    }));

    const intern = new Intern()
    await intern.getEmployee()
    expect(intern).toBeInstanceOf(Intern);

    spy.mockRestore();
}
)

test('function should validate email property', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        intern_number: 9,
    }));

    const intern = new Intern()
    await intern.askInternNumber()
    expect(intern.intern_number).toBe(9)

    spy.mockRestore();
})