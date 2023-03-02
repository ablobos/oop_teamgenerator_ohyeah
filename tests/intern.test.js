const Engineer = require('./lib/Intern')

    describe('Intern', () => {
    let intern;

    beforeEach(() => {
        intern = new Intern();
});

describe('constructor', () => {
    it('should create a new Intern instance with default values', () => {
    expect(intern).toBeDefined();
    expect(intern.name).toBe('');
    expect(intern.id).toBeNull();
    expect(intern.email).toBe('');
    expect(intern.school).toBe('');
    });
});

describe('school', () => {
    it('should set the school property when the setter is called', () => {
        const school = 'Columbia University';
        intern.school = school;
        expect(intern.school).toBe(school);
    });

    it('should get the gitHub property when the getter is called', () => {
        const gitHub = 'johndoe123';
        intern.school = school;
        expect(intern.school).toBe(school);
    });
    });

    describe('setEmployee', () => {
        it('should set the name, id, email, and gitHub properties', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@example.com';
            const school = 'Columbia University';
            intern.setEmployee(name, id, email, school);
            expect(intern.name).toBe(name);
            expect(intern.id).toBe(id);
            expect(intern.email).toBe(email);
            expect(intern.school).toBe(school);
        });
    });
});