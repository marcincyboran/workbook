import { elStr, el } from './base';

export const renderWrapper = () => {
    el.content.innerHTML = `<section class="list"></section>`;
};

const renderTags = tags => {
    let markup = '';
    tags.forEach((tag) => {
        markup += `<span class="tag">${tag}</span>`;
    });
    return markup;
};

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
};

const calculateStars = () => {

};

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
    document.querySelector(`.${elStr.list}`).insertAdjacentHTML('beforeend', markup);
};

const renderCompany = company => {
    const markup = `
    <article class="list__item" data-id="${company.id}">
        <div class="list__top">
            <p class="list__rating">
                <svg class="icon icon--primary icon--small"><use href="./assets/svgs/sprite.svg#icon-star"></use></svg>
                <svg class="icon icon--primary icon--small"><use href="./assets/svgs/sprite.svg#icon-star"></use></svg>
                <svg class="icon icon--primary icon--small"><use href="./assets/svgs/sprite.svg#icon-star"></use></svg>
                <svg class="icon icon--blank icon--small"><use href="./assets/svgs/sprite.svg#icon-star"></use></svg>
                <svg class="icon icon--blank icon--small"><use href="./assets/svgs/sprite.svg#icon-star"></use></svg>
            </p>
            <figure class="list__image-box">
                <img src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg" alt="Budimex" class="list__image">
            </figure>
            <div class="list__content">
                <h2 class="heading-secondary u-mb-big">
                    <span class="list__company-link" data-id="${company.id}">${company.name}</span>
                </h2>
                <p class="paragraph">Polecenia: <span class="text-bold">${company.likes}</span></p>
                <p class="list__category-box">${renderTags(company.tags)}</p>
                <label class="list__details-toggle" for="${company.id}">
                    <svg class="icon">
                        <use href="./assets/svgs/sprite.svg#icon-info-with-circle"></use>
                    </svg>
                </label>
            </div>
        </div>
        <input class="list__details-switcher" type="checkbox" id="${company.id}">
        <div class="list__bottom">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sequi at quasi natus expedita ex adipisci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!
            </p>
        </div>
    </article>
    `;
    document.querySelector(`.${elStr.list}`).insertAdjacentHTML('beforeend', markup);
};

export const renderOfferts = offerts => {
    offerts.forEach(renderOffert);
};

export const renderCompanies = companies => {
    companies.forEach(renderCompany);
};