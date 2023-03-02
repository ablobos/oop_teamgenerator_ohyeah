const Manager = require('../lib/Manager')

    describe('Manager', () => {
    let manager;

    beforeEach(() => {
        intern = new Manager();
});

describe('constructor', () => {
    it('should create a new Manager instance with default values', () => {
    expect(manager).toBeDefined();
    expect(manager.name).toBe('');
    expect(manager.id).toBeNull();
    expect(manager.email).toBe('');
    expect(manager.officeNumber).toBeNull();
    expect(manager.role).toBe('Manager');
    });
});

describe('officeNumber', () => {
    it('should set the officeNumber property when the setter is called', () => {
        const officeNumber = 123;
        intern.officeNumber = officeNumber;
        expect(manager.officeNumber).toBe(officeNumber);
    });

    it('should get the officeNumber property when the getter is called', () => {
        const officeNumber = 123;
        manager.officeNumber = officeNumber;
        expect(manager.officeNumber).toBe(officeNumber);
    });
    });

    describe('setEmployee', () => {
        it('should set the name, id, email, and gitHub properties', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@example.com';
            const officeNumber = 123;
            engineer.setEmployee(name, id, email, officeNumber);
            expect(manager.name).toBe(name);
            expect(manager.id).toBe(id);
            expect(manager.email).toBe(email);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });
});