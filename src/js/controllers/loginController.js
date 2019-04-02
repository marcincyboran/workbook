import * as base from '../views/base';
import * as loginView from '../views/login';
import Login from '../models/Login';
import Form from '../models/Form';
import state from '../models/state';

export default function () {
    base.clearContent();
    base.hideHeader();
    base.renderLoader();

    base.removeLoader();
    loginView.renderLogin();

    addEvents();
}

function addEvents() {
    const forms = document.querySelectorAll(`.${base.elStr.loginForm}`);

    forms.forEach(el => {
        const form = new Form(el);
        form.init();

        el.addEventListener('submit', ev => {
            ev.preventDefault();
            if (!form.validForm()) return;
            console.log('Trying to login...!')
            // afterSend();
        });
    });
}