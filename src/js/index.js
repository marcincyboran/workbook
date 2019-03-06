import './assets/assets';
import './routing/router';
import { domElements } from './base/base';
import { template as company } from './views/company';
import { template as listCompanies } from './views/list-companies';
import { template as listOffers } from './views/list-offers';
import { template as navAside } from './views/nav-aside';
import { template as offer } from './views/offer';
import { template as register } from './views/register';

const state = {
    path: '/',
    param: ''
}
window.onpopstate = (e) => {
    loadTemplate();
    console.log(e)
};
window.addEventListener('locationChanged', function (e) {
    state.path = e.detail.path;
    state.param = e.detail.param;
    loadTemplate();
}, false);


function loadTemplate() {
    // load each route controller later
    let template = '';
    switch (state.path) {
        case '/company':
        console.log('company')
            template = company;
            break;
        case '/companies':
            template = listCompanies;
            break;
        case '/offerts':
            template = listOffers;
            break;
        case '/aside':
            template = navAside;
            break;
        case '/offert':
            template = offer;
                break;
        case '/registration':
            template = register;
            break;
        default:
            template = '';
            break;
    }
    // console.log(listCompanies);

    // end
    domElements.content.innerHTML = template;
}