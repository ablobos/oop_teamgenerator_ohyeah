const Employee = require('../lib/Employee')

describe('Employee class', () => {
    let employee;

    beforeEach(() => {
        employee = new Employee();
});

test('should initialize with null id, empty name, email, and "Employee" role', () => {
    expect(employee.id).toBeNull();
    expect(employee.name).toBe('');
    expect(employee.email).toBe('');
    expect(employee.role).toBe('Employee');
    });

test('should set name using setter', () => {
    employee.id = 123;
    expect(employee.id).toBe(123);
});

test('should set name using setter', () => {
    employee.name = 'John Doe';
    expect(employee.name).toBe('John Doe');
});

test('should set email using setter', () => {
    employee.email = 'jdoe@example.com';
    expect(employee.email).toBe('jdoe@example.com');
});

test('should not set role using setter', () => {
    employee.role = 'Manager';
    expect(employee.role).toBe('Employee');
});

test('should return correct values from getters', () => {
    employee.id = 123;
    employee.name = 'John Doe';
    employee.email = 'jdoe@example.com';

    expect(employee.id).toBe(123);
    expect(employee.name).toBe('John Doe');
    expect(employee.email).toBe('jdoe@example.com');
    expect(employee.role).toBe('Employee');
  });

});
