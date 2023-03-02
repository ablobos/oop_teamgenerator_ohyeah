class Employee {
    constructor() {
        this._id = null
        this._name = '';
        this._email = '';
        this._role = 'Employee';
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }

    get role () {
        return this._role;
    }

    set role(value) {
        this._role = 'Employee'
    }
}

module.exports = Employee