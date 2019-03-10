import { elementsStrings, elements } from '../views/base';

export const renderWrapper = () => {
    elements.content.innerHTML = `<section class="list"></section>`;
}

const renderTags = tags => {
    let markup = '';
    tags.forEach((tag) => {
        markup += `<span class="tag">${tag}</span>`;
    });
    return markup;
}

const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    // Get time from server
    const today = new Date();
    if (today.getTime() - date.getTime() <= 86400000) {
        return `
        ${(date.getHours() < 10) ? '0' + date.getHours() : date.getHours()}:${(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()}`;
    }
    return `
    ${(date.getDate() < 10) ? '0' + date.getDate() : date.getDate()}.${(date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth()}.${date.getFullYear()}`
}

const renderOffert = offert => {
    const markup = `
        <article class="list__item" data-id="${offert.id}">
            <div class="list__top">
                <p class="list__date">${formatDate(offert.date)}</p>
                <figure class="list__image-box">
                    <img src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg" alt="Budimex" class="list__image">
                </figure>
                <div class="list__content">
                    <h2 class="heading-secondary u-mb-big">${offert.title}</h2>
                    <a href="https://www.google.com/maps?q=${offert.location}" target="_blank" class="list__location">
                        <svg class="icon icon--primary">
                            <use href="./assets/svgs/sprite.svg#icon-location-pin"></use>
                        </svg>
                        <span>${offert.location}</span>
                    </a>
                    <p class="list__category-box">${renderTags(offert.tags)}</p>
                    <label class="list__details-toggle" for="list-item-details-${offert.id}">
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-info-with-circle"></use>
                        </svg>
                    </label>
                </div>
            </div>
            <input class="list__details-switcher" type="checkbox" id="list-item-details-${offert.id}">
            <div class="list__bottom">
                <p>${offert.text}</p>
            </div>
        </article>
    `;
    setTimeout(4000);
    document.querySelector(`.${elementsStrings.list}`).insertAdjacentHTML('beforeend', markup);
}

export const renderOfferts = offerts => {
    offerts.forEach(renderOffert);
}