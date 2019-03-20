import * as base from './base';

export const renderOffer = offer => {
    const markup = `
        <section class="offer" data-id="${offer.id}">
            <div class="offer__top">
                <h2 class="heading-primary offer__top-title">${offer.title}</h2>
            </div>
            <div class="gallery">
                <img src="" alt="gallery photo 1" class="gallery-item">
                <img src="" alt="gallery photo 2" class="gallery-item">
                <img src="" alt="gallery photo 3" class="gallery-item">
                <img src="" alt="gallery photo 4" class="gallery-item">
            </div>
            <div class="offer__content">
                <div class="offer__description">
                    <h3 class="heading-secondary u-mb-medium">Opis:</h3>
                    <p class="offer__description-text u-mb-big">
                        ${offer.text}
                    </p>
                    <p class="offer__description-text u-mb-huge">
                        ${offer.details.textDetails}
                    </p>
                    <a href="" class="button button--primary button--icon button--big" data-id="${offer.id}">
                        <span>Złóż ofertę</span>
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-plus"></use>
                        </svg>
                    </a>
                </div>
                <aside class="offer__sidebar">
                    <h3 class="heading-secondary u-mb-medium">Kontakt:</h3>
                    <ul class="u-list u-mb-big">
                        <li class="u-list__item u-list__item--normal">
                            <svg class="icon icon--normal icon--secondary"><use href="./assets/svgs/sprite.svg#icon-user"></use></svg>
                            ${offer.details.name}
                        </li>
                        <li class="u-list__item u-list__item--normal">
                            <svg class="icon icon--normal icon--secondary"><use href="./assets/svgs/sprite.svg#icon-old-phone"></use></svg>
                            ${offer.details.tel}
                        </li>
                        <li class="u-list__item u-list__item--normal">
                            <svg class="icon icon--normal icon--secondary"><use href="./assets/svgs/sprite.svg#icon-email"></use></svg>
                            ${offer.details.mail}
                        </li>
                        <li class="u-list__item u-list__item--normal">
                            <svg class="icon icon--normal icon--secondary"><use href="./assets/svgs/sprite.svg#icon-facebook"></use></svg>
                            <a href="https://www.facebook.com/${offer.details.fb}" target="_blank">Profil</a>
                        </li>
                    </ul>
                    <h3 class="heading-secondary u-mb-medium">Lokalizacja:</h3>
                    <ul class="u-list u-mb-big">
                        <li class="u-list__item u-list__item--normal">
                            <svg class="icon icon--normal icon--secondary"><use href="./assets/svgs/sprite.svg#icon-location-pin"></use></svg>
                            <a href="https://www.google.com/maps?q=${offer.location}" target="_blank">Bogatynia</a>
                        </li>
                    </ul>
                    <iframe class="offer__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320513.1439457553!2d16.71168578074838!3d51.126743182413364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1sen!2spl!4v1551616973081" frameborder="0" style="border:0" allowfullscreen></iframe>
                </aside>          
            </div>
        </section>
    `;
    base.el.content.insertAdjacentHTML('beforeend', markup);
};