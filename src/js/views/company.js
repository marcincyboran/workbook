export const template = `
    <section class="company">

        <div class="company__top">
            <h2 class="company__top-heading heading-primary">Budimex S.A.</h2>
            <a href="https://www.google.com/maps?q=Bogatynia" target="_blank" class="company__top-location">
                <svg class="icon icon--primary">
                    <use href="./assets/svgs/sprite.svg#icon-location-pin"></use>
                </svg>
                <span>Bogatynia</span>
            </a>
            <div class="company__top-rate">
                <span>8.8</span>
            </div>
        </div>

        <div class="company__gallery">
            <img src="" alt="gallery photo 1" class="company__gallery-item">
            <img src="" alt="gallery photo 2" class="company__gallery-item">
            <img src="" alt="gallery photo 3" class="company__gallery-item">
        </div>

        <div class="company__content">

            <div class="company__description">
                <h3 class="heading-secondary u-mb-small">Opis:</h3>
                <p class="company__description-text u-mb-big">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, quis eveniet vel sapiente blanditiis fugit harum libero error cupiditate deserunt recusandae quibusdam obcaecati similique dolore? Eos porro dolor qui adipisci libero eaque quae tempora, eum exercitationem officia laboriosam ipsum maiores non aspernatur. Sapiente odio eveniet veniam illum veritatis exercitationem qui?
                </p>
                <h3 class="heading-secondary u-mb-small">Usługi:</h3>
                <ul class="u-list u-mb-big">
                    <li class="u-list__item">
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-chevron-down"></use>
                        </svg>
                        Lorem, ipsum.
                    </li>
                    <li class="u-list__item">
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-chevron-down"></use>
                        </svg>
                        Lorem, ipasdas um.
                    </li>
                    <li class="u-list__item">
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-chevron-down"></use>
                        </svg>
                        Lorem, ipasdas um.
                    </li>
                    <li class="u-list__item">
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-chevron-down"></use>
                        </svg>
                        Lorem, ipasdas um.
                    </li>
                    <li class="u-list__item">
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-chevron-down"></use>
                        </svg>
                        Lorem, ipsd asd.
                    </li>
                </ul>
                <h3 class="heading-secondary u-mb-small">Informacje:</h3>
                <div class="adress-details u-mb-big">
                    <address>
                        <span>59-920 Bogatynia</span>
                        <span>ul. Matejki 17</span>
                        <span>Polska</span>                                
                    </address>
                    <span>NIP: 123456789</span>                                
                </div>
                <h3 class="heading-secondary u-mb-small">Strona internetowa:</h3>
                <a class="company__site" href="#company__site">
                    <svg class="icon">
                        <use href="./assets/svgs/sprite.svg#icon-home"></use>
                    </svg>
                    <span>www.budimex.pl</span>
                </a>

            </div>

            <div class="company__review">
                <article class="company__review-item">
                    <header class="company__review-header">
                        <span class="company__review-person">Marcin Cyboran</span>
                        <span class="company__review-date">01.06.2019</span>
                    </header>
                    <p class="company__review-content">
                        <span class="company__review-rating">
                            <svg class="icon icon--primary icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--primary icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--primary icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--blank icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--blank icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                        </span>
                        <span class="company__review-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam, optio voluptatum ea in. Eveniet repellendus ullam quaerat quasi.
                        </span>
                    </p>
                </article>

                <article class="company__review-item">
                    <header class="company__review-header">
                        <span class="company__review-person">Klaudia Rawińska</span>
                        <span class="company__review-date">01.01.2019</span>
                    </header>
                    <p class="company__review-content">
                        <span class="company__review-rating">
                            <svg class="icon icon--primary icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--primary icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--primary icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--primary icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="icon icon--blank icon--small">
                                <use href="./assets/svgs/sprite.svg#icon-star"></use>
                            </svg>
                        </span>
                        <span class="company__review-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam, optio voluptatum ea in. Eveniet repellendus ullam quaerat quasi.
                        </span>
                    </p>
                </article>

            </div>

        </div>

        <div class="company__bottom">

            <a href="#lista" class="button button--primary button--icon button--big" data-company="budimex">
                <span>Lista ofert</span>
                <svg class="icon">
                    <use href="./assets/svgs/sprite.svg#icon-magnifying-glass"></use>
                </svg>
            </a>

            <a href="#projekty" class="button button--secondary button--icon button--big" data-company="budimex">
                <span>Projekty</span>
                <svg class="icon">
                    <use href="./assets/svgs/sprite.svg#icon-camera"></use>
                </svg>
            </a>

            <a href="#rezerwacja" class="button button--tertiary button--icon button--big" data-company="budimex">
                <span>Zarezerwuj</span>
                <svg class="icon">
                    <use href="./assets/svgs/sprite.svg#icon-calendar"></use>
                </svg>
            </a>

        </div>

    </section>
`;