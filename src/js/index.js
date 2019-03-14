import './assets/assets';
import './routing/router';
import { el } from './views/base';
import companiesCtrl from './controllers/listCompaniesController';
import listOfferCtrl from './controllers/listOffertsController';

const state = {};

window.onpopstate = (e) => {
    loadController();
    console.log(e)
};

window.addEventListener('locationChanged', function (e) {
    // TODO
    state.path = e.detail.path;
    state.param = e.detail.param;
    loadController();
}, false);


async function loadController() {
    // load each route controller later
    switch (state.path) {
        case '/company':
            break;
            
        case '/companies':
            companiesCtrl()
            break;

        case '/offerts':
            break;

        case '/aside':
            break;

        case '/offert':
            break;

        case '/registration':
            break;

        default:
            listOfferCtrl();
            break;
    }
};