export const template = `
    <section class="list">

        <article class="list__item">

            <div class="list__top">
                <p class="list__rating">
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
                </p>
                <figure class="list__image-box">
                    <img src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg" alt="Budimex" class="list__image">
                </figure>
                
                <div class="list__content">
                    <h2 class="heading-secondary u-mb-big">
                        <a class="list__company-link" href="#budimex">Budimex S.A.</a>
                    </h2>
                    <p class="paragraph">Polecenia: <span class="text-bold">1723</span></p>
                    <p class="list__category-box">
                        <span class="tag">Remont</span>
                        <span class="tag">Wnętrze</span>
                        <span class="tag">Ściany</span>
                        <span class="tag">Gładzie</span>
                        <span class="tag">Wnętrze</span>
                    </p>
                    <label class="list__details-toggle" for="list-item-details-1">
                        <svg class="icon">
                            <use href="./assets/svgs/sprite.svg#icon-info-with-circle"></use>
                        </svg>
                    </label>
                </div>
            </div>

            <input class="list__details-switcher" type="checkbox" id="list-item-details-1">
            
            <div class="list__bottom">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sequi at quasi natus expedita ex adipisci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!
                </p>
            </div>

        </article>

    </section>
`;