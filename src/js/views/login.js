import * as base from './base';

export const renderLogin = () => {
    const markup = `
        <section class="login u-mt-fixed">
            <div class="login-left">
                <p class="heading-primary heading-primary--primary u-mb-big">Dla CIEBIE</p>
                <p class="paragraph paragraph--big u-mb-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos?</p>
                <ul class="u-list u-mb-big">
                    <li class="u-list__item u-list__item--normal">
                        <svg class="icon icon--primary"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
                        Znajdź wykonawcę
                    </li>
                    <li class="u-list__item u-list__item--normal">
                        <svg class="icon icon--primary"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
                        Dodawaj oferty
                    </li>
                    <li class="u-list__item u-list__item--normal">
                        <svg class="icon icon--primary"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
                        Oceniaj usługi
                    </li>
                </ul>
                <a href="/registration" data-nav="1" class="button button--secondary button--icon" data-company="1">
                    <span>Zarejsetruj</span>
                    <svg class="icon"><use href="./assets/svgs/sprite.svg#icon-magnifying-glass"></use></svg>
                </a>
            </div>
            <div class="login-center u-text-center">
                <p class="logo logo--white u-mb-huge">Work<span class="logo logo__dot logo--white">.</span>Book</p>
                <form class="login__form" action="#login">
                    <div class="form__group u-mb-huge">
                        <div class="form__block form__block--full  form__block--nomargin">
                            <input type="text" class="form__input" name="e-mail" required placeholder="E-mail">
                            <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>
                            <span class="form__input-error">Błędny adress e-mail</span>
                        </div>
                    </div>
                    <div class="form__group u-mb-huge">
                        <div class="form__block form__block--full  form__block--nomargin">
                            <input type="text" class="form__input" name="pass" required placeholder="Hasło">
                            <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg> 
                            <span class="form__input-error">Hasło jest niepoprawne</span>
                        </div>
                    </div>
                    <div class="form__group form__group--submit">
                        <a href="#submit" class="button button--white button--icon" data-company="1">
                            <span>Zaloguj</span>
                            <svg class="icon rotate270"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
                        </a>
                    </div>
                </form>
            </div>
            <div class="login-right u-text-right">
                <p class="heading-primary heading-primary--primary u-mb-big ">Dla FIRM</p>
                <p class="paragraph paragraph--big u-mb-big">Lorem ipsum dolor sit amet, consectetur adipisicmos impedit numquam necessitatibus voluptatibus eligendi laboriosam?</p>
                <ul class="u-list u-list--reversed u-mb-big">
                    <li class="u-list__item u-list__item--normal">
                        <svg class="icon icon--primary"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
                        Przedstaw firmę
                    </li>
                    <li class="u-list__item u-list__item--normal">
                        <svg class="icon icon--primary"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
                        Dodawaj oferty
                    </li>
                    <li class="u-list__item u-list__item--normal">
                        <svg class="icon icon--primary"><use href="./assets/svgs/sprite.svg#icon-chevron-down"></use></svg>
                        Przedstawiaj projkety
                    </li>
                </ul>
                <a href="/registration" data-nav="1" class="button button--secondary button--icon" data-company="1">
                    <span>Zarejsetruj</span>
                    <svg class="icon"><use href="./assets/svgs/sprite.svg#icon-magnifying-glass"></use></svg>
                </a>
            </div>
        </section>
    `;
    base.el.content.insertAdjacentHTML('beforeend', markup);
}