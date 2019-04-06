import * as base from './base';

export const renderSection = (form) => {
    const isUser = (form === 'user') ? true : false;
    const markup = `
        <section class="register">
            <div class="register__nav">
                <a class="register__nav-button ${ (isUser) ? base.elStr.registerNavActive : '' }" data-form="user">Użytkownik</a>
                <a class="register__nav-button ${ (!isUser) ? base.elStr.registerNavActive : '' }" data-form="company">Firma</a>
            </div>
            <div class="register__content ${ (!isUser) ? base.elStr.registerContentCompany : '' }">
                <div class="register__block register__block--user">
                    <div class="register__bg-img register__bg-img--user">&nbsp;</div>
                    <form action="#user" data-form="user" class="form form--user">
                        <p class="heading-primary u-mb-biggest u-text-center">Formularz rejestracyjny dla użytkowników</p>
                        <div class="form__group u-mb-big">
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Imię</label>
                                <input type="text" class="form__input" name="name" required pattern="^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźżŻŹ]{3,30}$" value="Imię">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Nazwisko</label>
                                <input type="text" class="form__input" name="surname" required value="Nazwisko">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">E-mail</label>
                                <input type="email" class="form__input" name="email" required value="email@o2.pl">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Nieprawidłowy adres e-mail</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Tel.</label>
                                <input type="tel" class="form__input" name="tel" required pattern="^[0-9\ \-\+]{9,30}$" value="123456789">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Error occured</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Hasło</label>
                                <input type="password" class="form__input" name="pass" required autocomplete="current-password" value="123123123">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Hasło musi zawierać od 8 do 14 znaków (a-Z oraz 0-9)</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Miasto</label>
                                <input type="text" class="form__input" name="loc" required value="Lokalizacja">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Tylko miejscowość</span>
                            </div>
                        </div>
                        <div class="form__group u-mb-huge">
                            <div class="form__block form__block--full  form__block--nomargin">
                                <label class="form__label form__label--checkbox">
                                    <input type="checkbox" name="rodo1" class="form__checkbox" id="user-rodo1">
                                    <span class="form__checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję regulamin.
                                </label>
                            </div>
                        </div>
                        <div class="form__group form__group--submit u-text-center">
                            <input type="submit" class="button button--secondary button--big" value="Zarejestruj">
                        </div>
                    </form>
                </div>
                <div class="register__block register__block--company">
                    <form action="#company" data-form="company" class="form form--company">
                        <p class="heading-primary u-mb-biggest u-text-center">Formularz rejestracyjny dla przedsiębiorców</p>
                        <div class="form__group u-mb-big">
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Imię</label>
                                <input type="text" class="form__input" name="name" required value="Imię">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Nazwisko</label>
                                <input type="text" class="form__input" name="surname" required value="Nazwisko">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">E-mail</label>
                                <input type="email" class="form__input" name="email" required value="email@o2.pl">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Nieprawidłowy adres e-mail</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Tel.</label>
                                <input type="tel" class="form__input" name="tel" required value="123456789">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Error occured</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Hasło</label>
                                <input type="password" class="form__input" name="pass" required autocomplete="current-password" >
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Hasło musi zawierać od 8 do 14 znaków (a-Z oraz 0-9)</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Siedziba</label>
                                <input type="text" class="form__input" name="loc" required value="Lokalizacja">
                                <svg class="form__valid-icon"><use href="./assets/svgs/sprite.svg#icon-check"></use></svg>                                
                                <span class="form__input-error">Tylko miejscowość</span>
                            </div>
                        </div>
                        <div class="form__group u-mb-huge">
                            <div class="form__block form__block--full  form__block--nomargin">
                                <label class="form__label form__label--checkbox">
                                    <input type="checkbox" name="rodo2" class="form__checkbox" id="user-rodo2">
                                    <span class="form__checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję regulamin.
                                </label>
                            </div>
                            <div class="form__block form__block--full form__block--nomargin">
                                <label class="form__label form__label--checkbox">
                                    <input type="checkbox" name="rodo3" class="form__checkbox" id="user-rodo3">
                                    <span class="form__checkmark"></span>Wyrażam zgodę na otrzymywanie newslettera.
                                </label>
                            </div>
                        </div>
                        <div class="form__group form__group--submit u-text-center">
                            <input type="submit" class="button button--tertiary button--big" value="Zarejestruj">
                        </div>
                    </form>
                    <div class="register__bg-img register__bg-img--company">&nbsp;</div>
                </div>
            </div>
        </section>
    `;
    base.el.content.insertAdjacentHTML('beforeend', markup);
};

export const switchForms = (current, buttons) => {
    buttons.forEach(button => button.classList.remove(base.elStr.registerNavActive));
    current.classList.add(base.elStr.registerNavActive);

    const content = document.querySelector(`.${base.elStr.registerContent}`);
    const company = base.elStr.registerContentCompany;
    (current.dataset.form === 'company') ? content.classList.add(company) : content.classList.remove(company);
};