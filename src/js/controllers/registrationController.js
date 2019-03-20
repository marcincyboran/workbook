import * as base from '../views/base';
import * as registrationView from '../views/registration';
import Registration from '../models/Registration';

export default function () {
    console.log('Register controller works');

    base.clearContent();
    base.renderLoader();

    registrationView.renderSection();
    base.removeLoader();
}