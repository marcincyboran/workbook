import * as base from './base';

export const renderWrapper = () => {
    base.el.content.innerHTML = `<section class="list"></section>`;
};

const renderTags = tags => {
    let markup = '';
    tags.forEach(tag => markup += `<span class="tag">${tag}</span>`);
    return markup;
};

const renderAsideLink = asideLinks => {
    let markup = '';
    asideLinks.forEach((content) => {
        markup += `<li class="side-nav__item"><a href="#${content}" data-nav="${content}" class="side-nav__link">${content}</a></li>`;
    });
    return markup;
};

const calculateAndRenderStars = (likes, votes) => {
    const stars = 5;
    const fullStars = Math.round(likes/votes * stars);
    let output = ``;
    let i;
    for(i = 0; i < stars; i++) {
        output += `<svg class="icon icon--${(i < fullStars) ? 'primary' : 'blank'} icon--small"><use href="./assets/svgs/sprite.svg#icon-star"></use></svg>`
    }
    return output;
};

const renderOffert = offert => {
    const markup = `
        <article class="list__item" data-id="${offert.id}">
            <div class="list__top">
                <p class="list__date">${base.formatDate(offert.date)}</p>
                <figure class="list__image-box">
                    <img src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg" alt="Budimex" class="list__image">
                </figure>
                <div class="list__content">
                    <h2 class="heading-secondary u-mb-big">
                        <a class="list__offer-link" href="#${offert.id}">${offert.title}</a>
                    </h2>
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
    document.querySelector(`.${base.elStr.list}`).insertAdjacentHTML('beforeend', markup);
};

const renderCompany = company => {
    const markup = `
        <article class="list__item" data-id="${company.id}">
            <div class="list__top">
                <p class="list__rating">
                    ${calculateAndRenderStars(company.likes, company.votes)}
                </p>
                <figure class="list__image-box">
                    <img src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg" alt="Budimex" class="list__image">
                </figure>
                <div class="list__content">
                    <h2 class="heading-secondary u-mb-big">
                        <a class="list__company-link" href="#${company.id}">${company.name}</a>
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
                <p>${company.text}</p>
            </div>
        </article>
    `;
    document.querySelector(`.${base.elStr.list}`).insertAdjacentHTML('beforeend', markup);
};

export const renderAside = aside => {
    console.log(aside);
    const markup = `
        <aside class="side-nav">
            <input class="side-nav__switcher" type="checkbox" id="toggle-list">
            <section class="side-nav__list-box">
                <label class="side-nav__list-label" for="toggle-list">Więcej...</label>
                <ul class="side-nav__list">
                    ${renderAsideLink(aside.categories)}
                </ul>
            </section>
            <section class="side-nav__list-box">
                <label class="side-nav__list-label" for="toggle-list">Więcej...</label>
                <ul class="side-nav__list">
                    ${renderAsideLink(aside.popular)}
                </ul>
            </section>
            <section class="side-nav__list-box">
                <label class="side-nav__list-label" for="toggle-list">Więcej...</label>
                <ul class="side-nav__list">
                    ${renderAsideLink(aside.places)}
                </ul>
            </section>
        </aside>
    `;
    document.querySelector(`.${base.elStr.list}`).insertAdjacentHTML('beforebegin', markup);
};

export const renderOffers = offerts => {
    offerts.forEach(renderOffert);
};

export const renderCompanies = companies => {
    companies.forEach(renderCompany);
};