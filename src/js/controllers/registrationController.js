import * as base from '../views/base';
import * as registrationView from '../views/registration';
import Registration from '../models/Registration';
import Form from '../models/Form';
import state from '../models/state';

export default function (form = 'user') {
    console.log('Register controller works');

    base.clearContent();
    // base.hideHeader();
    base.renderLoader();

    registrationView.renderSection(form);
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