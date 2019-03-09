export const elements = {
    topNavigation: document.querySelector('.top-nav'),
    content: document.querySelector('#js-content'),
};

export const elementsStrings = {
    list: `list`,
    listTags: 'list__category-box'
};

export function clearContent() {
    elements.content.innerHTML = '';
}