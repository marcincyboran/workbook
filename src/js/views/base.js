export const el = {
    topNavigation: document.querySelector('.top-nav'),
    content: document.querySelector('#js-content'),
};

export const elStr = {
    list: `list`,
    listTags: 'list__category-box',
    loader: 'loader'
};

export function clearContent() {
    el.content.innerHTML = '';
}

export function renderLoader(parent) {
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
        parentElement.insertAdjacentHTML('afterbegin').innerHTML = loader;
    }
}

export function removeLoader() {
    const loader = document.querySelector(`.${elStr.loader}`);
    loader.parentNode.removeChild(loader);
}