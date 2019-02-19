import _ from 'lodash';
import test from './views/view';
import '../style/main.scss';

function component() {
    // let element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // return element;
}

document.body.appendChild(component());
test();