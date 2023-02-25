const inquirer = require('inquirer');
const Engineer = require('../classes/Engineer.js')

test('function should return expected output', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        name: 'A.B. Lobos',
        email: 'ablobos@outlook.com',
        github: 'abloboshub'
    }));

    const engineer = new Engineer()
    await engineer.getEmployee()
    expect(engineer).toBeInstanceOf(Engineer);

    spy.mockRestore();
})

test('function should validate email property', async () => {
    const spy = jest.spyOn(inquirer, 'prompt')
    spy.mockImplementation(() => Promise.resolve({
        github: 'ablobosgithub',
    }));

    const engineer = new Engineer()
    await engineer.askGitHub()
    expect(engineer.github).toBe('ablobosgithub')

    spy.mockRestore();
})