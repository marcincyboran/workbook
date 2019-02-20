const template = `
<aside class="side-nav">
                
    <input class="side-nav__switcher" type="checkbox" id="toggle-list">

    <section class="side-nav__list-box">
        <label class="side-nav__list-label" for="toggle-list">
            Więcej...
        </label>
        <ul class="side-nav__list">
            <li class="side-nav__item">
                <a href="#link1" class="side-nav__link">Kategoria 1</a>
            </li>
            <li class="side-nav__item">
                <a href="#link2" class="side-nav__link">Kategoria 2</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Kategoria 3</a>
            </li>
        </ul>
    </section>

    <section class="side-nav__list-box">
        <label class="side-nav__list-label" for="toggle-list">
            Więcej...
        </label>
        <ul class="side-nav__list">
            <li class="side-nav__item">
                <a href="#link1" class="side-nav__link">Popular 1</a>
            </li>
            <li class="side-nav__item">
                <a href="#link2" class="side-nav__link">Popular 2</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Popular 3</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Popular 4</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Popular 5</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Popular 6</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Popular 7</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Popular 8</a>
            </li>
        </ul>
    </section>

    <section class="side-nav__list-box">
        <label class="side-nav__list-label" for="toggle-list">
            Więcej...
        </label>
        <ul class="side-nav__list">
            <li class="side-nav__item">
                <a href="#link1" class="side-nav__link">Miasto 1</a>
            </li>
            <li class="side-nav__item">
                <a href="#link2" class="side-nav__link">Miasto 2</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Miasto 3</a>
            </li>
            <li class="side-nav__item">
                <a href="#link3" class="side-nav__link">Miasto 4</a>
            </li>
        </ul>
    </section>

    </aside>

    <section class="list">

    <article class="list__item">

        <div class="list__top">

            <figure class="list__image-box">
                <img src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg" alt="Budimex" class="list__image">
            </figure>
            
            <div class="list__content">
                <h2 class="heading-secondary">
                    <a class="list__company-link" href="#budimex">Budimex S.A.</a>
                </h2>
                <p class="paragraph">Polecenia: <span class="text-bold">1723</span></p>
                <p class="list__rating">
                    1 2 3 4 5
                </p>
                <p class="list__category-box">
                    <span class="tag">Remont</span>
                    <span class="tag">Wnętrze</span>
                    <span class="tag">Ściany</span>
                    <span class="tag">Gładzie</span>
                    <span class="tag">Wnętrze</span>
                </p>
                <label class="list__details-toggle" for="list-item-details-1">
                    <svg class="list__details-icon">
                        <use href="./assets/svgs/sprite.svg#icon-info-with-circle"></use>
                    </svg>
                </label>
            </div>
        </div>

        <input class="list__details-switcher" type="checkbox" id="list-item-details-1">
        
        <div class="list__bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sequi at quasi natus expedita ex adipisci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!
        </div>

    </article>

    <article class="list__item">

        <div class="list__top">
            <figure class="list__image-box">
                <img src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg" alt="Budimex" class="list__image">
            </figure>
            <div class="list__content">
                <h2 class="heading-secondary">
                    Budimex S.A.
                </h2>
                <p class="paragraph">
                    Polecenia: <span class="text-bold">1723</span>
                </p>
                <p class="list__rating">
                    1 2 3 4 5
                </p>
                <p class="list__category-box">
                    <span class="tag">Remont</span>
                    <span class="tag">Wnętrze</span>
                    <span class="tag">Ściany</span>
                    <span class="tag">Gładzie</span>
                    <span class="tag">Wnętrze</span>
                </p>
                <label class="list__details-toggle" for="list-item-details-2">
                    <svg class="list__details-icon">
                        <use href="./assets/svgs/sprite.svg#icon-info-with-circle"></use>
                    </svg>
                </span>
            </div>
        </div>
        <input class="list__details-switcher" type="checkbox" id="list-item-details-2">
        <div class="list__bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sequi at quasi natus expedita ex adipisci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!isci, aliquam voluptates suscipit magnam ad illo nulla sunt saepe delectus? Aut dolores facere quibusdam!
        </div>
    </article>

</section>
`

export default template;