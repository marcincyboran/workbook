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
    form.checkInput();

    console.log(form);
    console.log(f);
    // const reg = ne.w RegExp('^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźżŻ]{3,}$', 'g');
    // const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');


    // const inputs = f.querySelectorAll('input');
    // inputs.forEach(input => input.classList.add('error'));
}

class validateForm {
    constructor(form, options = {} ) {
        this.form = form,
        this.inputs = form.querySelectorAll('input'),
        this.options = Object.assign({}, {
            errorClass: 'error',
        }, options)
    };

    noValidate() {
        this.form.setAttribute('novalidate', 'novalidate');
    };

    checkInput() {
        this.inputs.forEach(input => {
            console.log(input)
        });

    }

}