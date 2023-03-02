const Engineer = require('../lib/Engineer')

    describe('Engineer', () => {
    let engineer;

    beforeEach(() => {
        engineer = new Engineer();
});

describe('constructor', () => {
    it('should create a new Engineer instance with default values', () => {
    expect(engineer).toBeDefined();
    expect(engineer.name).toBe('');
    expect(engineer.id).toBeNull();
    expect(engineer.email).toBe('');
    expect(engineer.gitHub).toBe('');
    });
});

describe('gitHub', () => {
    it('should set the gitHub property when the setter is called', () => {
        const gitHub = 'johndoe123';
        engineer.gitHub = gitHub;
        expect(engineer.gitHub).toBe(gitHub);
    });

    it('should get the gitHub property when the getter is called', () => {
        const gitHub = 'johndoe123';
        engineer.gitHub = gitHub;
        expect(engineer.gitHub).toBe(gitHub);
    });
});

    describe('setEmployee', () => {
        it('should set the name, id, email, and gitHub properties', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@example.com';
            const gitHub = 'johndoe123';
            engineer.setEmployee(name, id, email, gitHub);
            expect(engineer.name).toBe(name);
            expect(engineer.id).toBe(id);
            expect(engineer.email).toBe(email);
            expect(engineer.gitHub).toBe(gitHub);
        });
    });
});