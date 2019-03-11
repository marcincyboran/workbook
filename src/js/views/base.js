export const el = {
    topNavigation: document.querySelector('.top-nav'),
    content: document.querySelector('#js-content'),
};

export const elStr = {
    list: `list`,
    listTags: 'list__category-box',
};

export function clearContent() {
    el.content.innerHTML = '';
}