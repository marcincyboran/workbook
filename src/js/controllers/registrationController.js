import * as base from '../views/base';
import * as registrationView from '../views/registration';
import Registration from '../models/Registration';

export default function () {
    console.log('Register controller works');

    base.clearContent();
    base.renderLoader();

    registrationView.renderSection();
    base.removeLoader();

    addEvents()
};

function addEvents() {
    const forms = document.querySelectorAll(`.${base.elStr.registerSection} form`);

    forms.forEach(el => {
        el.addEventListener('submit', (ev) => {
            ev.preventDefault();
            createAccount(ev.target);
        });
    });

};

function createAccount(form) {
    // Check type
    // const type = form.dataset.form;

    // Validate fields
    validate(form);


    // create obj
    // const data = {
    //     type: type,
    // }

    // Send request
    // const registration = new Registration();
    // registration.createUser(data);

    // Validate response
    // - hide form
    // - show message && redirect 5sec after
};

function validate(f) {

    const form = new validateForm(f);
    form.noValidate();
    form.assignEvents();

    // console.log(form);
    // console.log(f);

    // const inputs = f.querySelectorAll('input');
    // inputs.forEach(input => input.classList.add('error'));
}

class validateForm {
    constructor(form, options = {} ) {
        this.form = form,
        this.inputs = form.querySelectorAll('input'),
        this.options = Object.assign({}, {
            errorClass: 'error',
            textReg: new RegExp('^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźżŻŹ]{1,}$', 'i'),
            emailReg: new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i'),
            passwordReg: new RegExp('^[a-zA-Z0-9ąĄćĆęĘłŁńŃóÓśŚźżŻŹ]{8,14}$', 'i')
        }, options)
    };

    noValidate() {
        this.form.setAttribute('novalidate', 'novalidate');
    };

    assignEvents() {
        this.inputs.forEach(input => {
            const type = input.type.toLowerCase();

            if(type === 'text') {
                input.addEventListener('blur', ev => {
                    this.testText(ev.target);
                });
            };
            if(type === 'email') {
                input.addEventListener('blur', ev => {
                    this.testEmail(ev.target);
                });
            };
            if(type === 'password') {
                input.addEventListener('blur', ev => {
                    this.testPassword(ev.target);
                });
            };
            if(type === 'checkbox') {
                input.addEventListener('click', ev => {
                    this.testCheckbox(ev.target);
                });
            };
        });

    };

    testText(input) {
        let inputIsValid = true;
        const reg = this.getRegExp(input, this.options.textReg);
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        console.log();
        return this.fieldValidation(input, inputIsValid);
    };

    testEmail(input) {
        let inputIsValid = true;
        const reg = this.getRegExp(input, this.options.emailReg);
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        return this.fieldValidation(input, inputIsValid);
    };

    testPassword(input) {
        let inputIsValid = true;
        const reg = this.getRegExp(input, this.options.passwordReg);
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        return this.fieldValidation(input, inputIsValid);
    };

    testCheckbox(input) {
        console.log('test checkbox');
        console.log(input);
    };

    fieldValidation(input, inputIsValid) {
        if (inputIsValid) {
            input.classList.remove(this.options.errorClass);
            return false;
        } else {
            input.classList.add(this.options.errorClass);
            return true;
        }
    };

    getRegExp(input, backupPattern) {
        const pattern = input.getAttribute('pattern');
        return (pattern !== null) ? new RegExp(pattern, 'gi') : backupPattern;
    };

}