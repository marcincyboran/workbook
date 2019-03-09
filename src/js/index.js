import './assets/assets';
import './routing/router';
import { elements } from './views/base';
import companiesCtrl from './controllers/companiesController';
import listOfferCtrl from './controllers/listOffertsController';

const state = {};

window.onpopstate = (e) => {
    loadTemplate();
    console.log(e)
};

window.addEventListener('locationChanged', function (e) {
    state.path = e.detail.path;
    state.param = e.detail.param;
    loadTemplate();
}, false);


async function loadTemplate() {
    // load each route controller later
    switch (state.path) {
        case '/company':
            break;
            
        case '/companies':
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