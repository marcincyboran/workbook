import state from '../models/state';
import axios from 'axios';


export const el = {
    topNavigation: document.querySelector('.top-nav'),
    headerBottom: document.querySelector('.header__bottom'),
    content: document.querySelector('.content'),
};

export const elStr = {
    list: `list`,
    listTags: 'list__category-box',
    loader: 'loader',
    content: 'content',
    listCompanyLink: 'list__company-link',
    listOfferLink: 'list__offer-link',
    registerContent: 'register__content',
    registerContentCompany: 'register__content--active-company',
    registerNavButton: 'register__nav-button',
    registerNavActive: 'register__nav-button--active',
    formBlock: 'form__block',
    loginForm: 'login__form'
};

export function clearContent() {
    el.content.innerHTML = '';
};

export function renderLoader(parent = el.content) {
    const loader = `
        <div class="loader">
            <p class="heading-secondary u-mb-huge">Ładowanie...</p>
            <div class="loader__spinners">
                <div class="loader__spinner">
                    <div class="loader__outer">&nbsp;</div>
                    <div class="loader__inner">&nbsp;</div>
                </div>
                <div class="loader__spinner--reverse">
                    <div class="loader__middle">&nbsp;</div>
                    <div class="loader__center">&nbsp;</div>
                </div>
            </div>
        </div>`;

    if (typeof parent === "string") {
        document.querySelector(`.${parent}`).insertAdjacentHTML('afterbegin', loader);
    } else {
        parent.insertAdjacentHTML('afterbegin', loader);
    }
};

export function removeLoader() {
    const loader = document.querySelector(`.${elStr.loader}`);
    loader.parentNode.removeChild(loader);
};

export function formatDate(rawDate) {
    const date = new Date(rawDate);

    // Get time from server and store it in state
    const today = new Date(state.time) || new Date();
    if (today.getTime() - date.getTime() <= 86400000) {
        return `${(date.getHours() < 10) ? '0' + date.getHours() : date.getHours()}:${(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()}`;
    }
    return `${(date.getDate() < 10) ? '0' + date.getDate() : date.getDate()}.${(date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth()}.${date.getFullYear()}`
};

export function hideHeader() {
    el.headerBottom.classList.add('u-hidden');
    
    // const animEl = el.headerBottom;
    // let height = getComputedStyle(animEl).getPropertyValue('height').replace('px', '');

    // const id = setInterval(frame, 5);

    // function frame() {
    //     if (height == 0) {
    //         clearInterval(id);
    //     } else {
    //         height = height - 10;
    //         console.log(height);
    //         animEl.style.height = `${height}px`;
    //     }
    // }

};

export function showHeader() { el.headerBottom.classList.remove('u-hidden') };

const getTime = async () => {
    const result = await axios('/api/base/time');
    state.time = result.data;
    console.log(state);
};
getTime();