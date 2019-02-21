import './assets/assets';
import './routing/router';

const state = {
    path: '/',
    param: ''
}

window.addEventListener('locationChanged', function (e) {
    state.path = e.detail.path;
    state.param = e.detail.param;
    console.log(e);
    console.log(state);

}, false);