import * as base from './base';

const calculateAndRenderStars = (rating) => {
    const stars = 5;
    let output = ``;
    let i;

    for(i = 0; i < stars; i++) {
        output += `<svg class="icon icon--${(i < rating) ? 'primary' : 'blank'} icon--small"><use href="./assets/svgs/sprite.svg#icon-star"></use></svg>`
    }
    return output;
};

const createReview = review => {
    return `
        <article class="company__review-item">
            <header class="company__review-header">
                <span class="company__review-person">${review.name}</span>
                <span class="company__review-date">${base.formatDate(review.date)}</span>
            </header>
            <p class="company__review-content">
                <span class="company__review-rating">
                    ${calculateAndRenderStars(review.rating)}
                </span>
                <span class="company__review-text">${review.text}</span>
            </p>
        </article>
    `;
};

const createBlankReview = () => {
    return `
        <article class="company__review-item">
            <header class="company__review-header">
                <span class="company__review-person">System</span>
                <span class="company__review-date">brak recenzji</span>
            </header>
            <p class="company__review-content">
                <span class="company__review-text">Jeżeli korzystałeś z usług tej firmy, napisz recenzję. (opcja dostępna z panelu użytkownika)</span>
            </p>
        </article>
    `;
};

const createReviews = reviews => {
    if (!reviews) return createBlankReview();
    let allReviews = '';
    reviews.forEach(el => allReviews += createReview(el));
    return allReviews;
};

const createService = service => {
    return `
        <li class="u-list__item">
            <svg class="icon"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
            ${service}
        </li>
    `;
};

const createServices = services => {
    let output = '';
    services.forEach(el => output += createService(el));
    return output;
};

export const renderCompany = company => {
    const markup = `
        <section class="company">
            <div class="company__top">
                <h2 class="company__top-heading heading-primary">${company.name}</h2>
                <a href="https://www.google.com/maps?q=${company.location}" target="_blank" class="company__top-location">
                    <svg class="icon icon--primary"><use href="./assets/svgs/sprite.svg#icon-location-pin"></use></svg>
                    <span>${company.location}</span>
                </a>
                <div class="company__top-rate">
                    <span>${((company.likes/company.votes)*10).toFixed(1)}</span>
                </div>
            </div>
            <div class="gallery">
                <img src="" alt="gallery photo 1" class="gallery-item">
                <img src="" alt="gallery photo 2" class="gallery-item">
                <img src="" alt="gallery photo 3" class="gallery-item">
            </div>
            <div class="company__content">
                <div class="company__description">
                    <h3 class="heading-secondary u-mb-small">Opis:</h3>
                    <p class="company__description-text u-mb-big">${company.text}</p>
                    <h3 class="heading-secondary u-mb-small">Usługi:</h3>
                    <ul class="u-list u-mb-big">
                        ${(company.services) ? createServices(company.services) : ''}
                    </ul>
                    <h3 class="heading-secondary u-mb-small">Informacje:</h3>
                    <div class="adress-details u-mb-big">
                        <address>
                            <span>${company.details.zipCode} ${company.location}</span>
                            <span>ul. ${company.details.address}</span>
                            <span>${company.details.country}</span>                                
                        </address>
                        <span>${(company.details.nip) ? 'NIP: '+ company.details.nip : ''}</span>
                        <span>${(company.details.regon) ? 'REGON: '+ company.details.regon : ''}</span>                               
                    </div>
                    <h3 class="heading-secondary u-mb-small">Strona internetowa:</h3>
                    <a class="company__site" href="http://${company.site}" target="_blank">
                        <svg class="icon"><use href="./assets/svgs/sprite.svg#icon-home"></use></svg>
                        <span>${company.site}</span>
                    </a>
                </div>
                <div class="company__review">
                    ${(company.reviews) ? createReviews(company.reviews) : createReviews()}
                </div>
            </div>
            <div class="company__bottom">
                <a href="#lista" class="button button--primary button--icon button--big" data-company="${company.id}">
                    <span>Lista ofert</span>
                    <svg class="icon"><use href="./assets/svgs/sprite.svg#icon-magnifying-glass"></use></svg>
                </a>
                <a href="#projekty" class="button button--secondary button--icon button--big" data-company="${company.id}">
                    <span>Projekty</span>
                    <svg class="icon"><use href="./assets/svgs/sprite.svg#icon-camera"></use></svg>
                </a>
                <a href="#rezerwacja" class="button button--tertiary button--icon button--big" data-company="${company.id}">
                    <span>Zarezerwuj</span>
                    <svg class="icon"><use href="./assets/svgs/sprite.svg#icon-calendar"></use></svg>
                </a>
            </div>
        </section>
    `;
    base.el.content.insertAdjacentHTML('beforeend', markup);
};