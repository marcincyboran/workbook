import './assets/assets';
import './routing/router';
import state from './models/state';

import companiesCtrl from './controllers/listCompaniesController';
import companyCtrl from './controllers/companyController';
import offersCtrl from './controllers/listOffersController';
import offerCtrl from './controllers/offerController';
import registrationCtrl from './controllers/registrationController';

window.onpopstate = (e) => {
    loadController();
    console.log(e)
};

window.addEventListener('locationChanged', function (e) {
    // TODO
    state.path = e.detail.path;
    state.param = e.detail.param;
    loadController();
    // console.info('Location changed state', state);

}, false);

async function loadController() {
    // load each route controller later
    switch (state.path) {
        case '/company':
            companyCtrl(state.param);
            break;   
        case '/companies':
            companiesCtrl()
            break;
        case '/offers':
            offersCtrl()
            break;
        case '/offer':
            offerCtrl(state.param);
            break;
        case '/registration':
            registrationCtrl();
            break;
        default:
            offersCtrl();
            break;
    }
};

offersCtrl()


// TODO

// Poprawić router, bazujący na location / poprawne ścieżki