import * as base from '../views/base';
import * as registrationView from '../views/registration';
import Registration from '../models/Registration';

export default function () {
    console.log('Register controller works');

    base.clearContent();
    base.renderLoader();

    registrationView.renderSection();
    base.removeLoader();

    init();
    
};

function init() {
    const forms = document.querySelectorAll(`.${base.elStr.registerContent} form`);
    const switchers = document.querySelectorAll(`.${base.elStr.registerNavButton}`);

    forms.forEach(el => {
        const form = new ValidateForm(el);
        form.noValidate();
        form.assignEvents();

        el.addEventListener('submit', ev => {
            ev.preventDefault();
            if (!form.validForm()) return;
            console.log('Form is valid, sending...!');
            createAccount(el);
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

function createAccount(form) {
    // Check type
    // const type = form.dataset.form;

    // Validate fields
    // validate(form);


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

class ValidateForm {
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
        }, options)
    };

    noValidate() {
        this.form.setAttribute('novalidate', 'novalidate');
    };

    assignEvents() {
        this.inputs.forEach(input => {
            const type = input.type.toLowerCase();

            if (type !== 'checkbox' || type !== 'radio') {
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
            } else {
                input.addEventListener('click', () => {
                    if (type === 'checkbox') {
                        this.testCheckbox(input);
                    }
                    // else if (type === 'radio') {
                    //     this.testRadio(input);
                    // }
                });
            }
        });
    };

    testText(input) {
        let inputIsValid = true;
        const reg = this.getRegExp(input, this.options.textReg);
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        this.fieldClass(input, inputIsValid);
        return inputIsValid;
    };

    testEmail(input) {
        let inputIsValid = true;
        const reg = this.getRegExp(input, this.options.emailReg);
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        this.fieldClass(input, inputIsValid);
        return inputIsValid;
    };

    testPassword(input) {
        let inputIsValid = true;
        const reg = this.getRegExp(input, this.options.passwordReg);
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        this.fieldClass(input, inputIsValid);
        return inputIsValid;
    };

    testPhone(input) {
        let inputIsValid = true;
        const reg = this.getRegExp(input, this.options.phoneReg);
        if (!reg.test(input.value)) inputIsValid = false;
        if (input.value === '') inputIsValid = false;
        this.fieldClass(input, inputIsValid);
        return inputIsValid;   
    }

    testCheckbox(input) {
        console.log(input);
        // console.log('test checkbox');
        // console.log(input);
    };

    fieldClass(input, inputIsValid) {
        const block = input.closest(`.${base.elStr.formBlock}`);
        if (inputIsValid) {
            block.classList.remove(this.options.errorClass);
            block.classList.add(this.options.validClass);
        } else {
            block.classList.add(this.options.errorClass);
            block.classList.remove(this.options.validClass);
        }
    };

    getRegExp(input, backupPattern) {
        const pattern = input.getAttribute('pattern');
        return (pattern !== null) ? new RegExp(pattern, 'gi') : backupPattern;
    };

    validForm() {
        let formIsValid = true;

        this.inputs.forEach(input => {
            const type = input.type.toLowerCase();

            if(type === 'text') {

                if(!this.testText(input)) formIsValid = false;

            } else if(type === 'email') {

                if(!this.testEmail(input)) formIsValid = false;

            } else if (type === 'password') {

                if(!this.testPassword(input)) formIsValid = false;

            } else if (type === 'tel') {

                if(!this.testPhone(input)) formIsValid = false;

            }
            // if(type === 'checkbox') {
            //     if(!this.testCheckbox(input)) formIsValid = false;
            //     // console.log(`Form is valid: ${formIsValid}`)
            // };

        });
        return formIsValid;
    }

}