import * as base from '../views/base';
import * as registrationView from '../views/registration';
import Registration from '../models/Registration';

export default function () {
    console.log('Register controller works');

    base.clearContent();
    base.renderLoader();

    registrationView.renderSection();
    base.removeLoader();

    addEvents();
    
};

function addEvents() {
    const forms = document.querySelectorAll(`.${base.elStr.registerContent} form`);
    const switchers = document.querySelectorAll(`.${base.elStr.registerNavButton}`);

    forms.forEach(el => {
        const form = new Form(el);
        form.init();

        el.addEventListener('submit', ev => {
            ev.preventDefault();
            if (!form.validForm()) return;
            createAccount(form);
            // afterSend();
        });
    });

    switchers.forEach(el => {
        el.addEventListener('click', ev => {
            ev.preventDefault();
            registrationView.switchForms(el, switchers);
        });
    });

};

async function createAccount(form) {
    const type = form.form.dataset.form;
    const dataObj = form.getValues();

    const registration = new Registration();
    const response = await registration.createAccount(dataObj, type);
    console.log(response);

    // Validate response
    // - hide form
    // - show message && redirect 5sec after
};

class Form {
    constructor(form, options = {} ) {
        this.form = form,
        this.inputs = form.querySelectorAll('input'),
        this.options = Object.assign({}, {
            errorClass: 'error',
            validClass: 'valid',
            textReg: new RegExp('^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźżŻŹ]{1,}$', 'i'),
            emailReg: new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i'),
            passwordReg: new RegExp('^[a-zA-Z0-9ąĄćĆęĘłŁńŃóÓśŚźżŻŹ]{8,14}$', 'i'),
            phoneReg: new RegExp('^[0-9\ \-\+]{9,30}$')
        }, options),
        this.values = {}
    };
    
    init() {
        this.form.setAttribute('novalidate', 'novalidate');

        this.inputs.forEach(input => {
            const type = input.type.toLowerCase();
            input.addEventListener('blur', () => {
                if (type === 'text') {
                    this.testText(input);
                } else if (type === 'tel') {
                    this.testPhone(input);
                } else if (type === 'email') {
                    this.testEmail(input);
                } else if (type === 'password') {
                    this.testPassword(input);
                }
            });
        });
    };

    getValues() {
        this.inputs.forEach(input => {
            const type = input.type.toLowerCase();
            const isBoolen = (type == 'checkbox' || type == 'radio');
            this.values[input.name] = (!isBoolen) ? input.value : input.checked;
        });
        return this.values;
    };

    baseTest(input, regExpBackup) {
        let inputIsValid = true;
        const pattern = input.getAttribute('pattern');
        const reg = (pattern !== null) ? new RegExp(pattern, 'i') : regExpBackup;
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        this.changeClasses(input, inputIsValid);
        return inputIsValid;
    };

    testText(input) {
        return this.baseTest(input, this.options.textReg);
    };

    testEmail(input) {
        return this.baseTest(input, this.options.emailReg);
    };

    testPassword(input) {
        return this.baseTest(input, this.options.passwordReg);
    };

    testPhone(input) {
        return this.baseTest(input, this.options.phoneReg);
    };

    changeClasses(input, inputIsValid) {
        const block = input.closest(`.${base.elStr.formBlock}`);
        if (inputIsValid) {
            block.classList.remove(this.options.errorClass);
            block.classList.add(this.options.validClass);
        } else {
            block.classList.add(this.options.errorClass);
            block.classList.remove(this.options.validClass);
        }
    };

    validForm() {
        let formIsValid = true;
        this.inputs.forEach(input => {
            const type = input.type.toLowerCase();
            switch (type) {
                case 'text':
                    if (!this.testText(input)) formIsValid = false;
                    break;
                case 'email':
                    if (!this.testEmail(input)) formIsValid = false;
                    break;
                case 'password':
                    if (!this.testPassword(input)) formIsValid = false;
                    break;
                case 'tel':
                    if (!this.testPhone(input)) formIsValid = false;
                    break;
            }
        });
        return formIsValid;
    }
}