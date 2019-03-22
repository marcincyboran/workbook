import * as base from './base';

export const renderSection = () => {
    const markup = `
        <section class="register">
            <div class="register__nav">
                <a class="register__nav-button register__nav-button--active" data-form="user">Użytkownik</a>
                <a class="register__nav-button" data-form="company">Firma</a>
            </div>
            <div class="register__content">
                <div class="register__block register__block--user">
                    <div class="register__bg-img register__bg-img--user">&nbsp;</div>
                    <form action="#user" data-form="user" class="form form--user">
                        <p class="heading-primary u-mb-biggest u-text-center">Formularz rejestracyjny dla użytkowników</p>
                        <div class="form__group u-mb-big">
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Imię</label>
                                <input type="text" class="form__input" name="name" required pattern="^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźżŻŹ]{3,}$" value="Imię">
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Nazwisko</label>
                                <input type="text" class="form__input" name="surname" required value="Nazwisko">
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">E-mail</label>
                                <input type="email" class="form__input" name="email" required value="email@o2.pl">
                                <span class="form__input-error">Nieprawidłowy adres e-mail</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Tel.</label>
                                <input type="text" class="form__input" name="tel" required value="123456789">
                                <span class="form__input-error">Error occured</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Hasło</label>
                                <input type="password" class="form__input" name="pass" required autocomplete="current-password">
                                <span class="form__input-error">Hasło musi zawierać od 8 do 14 znaków (a-Z oraz 0-9)</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Miasto</label>
                                <input type="text" class="form__input" name="loc" required value="Lokalizacja">
                                <span class="form__input-error">Tylko miejscowość</span>
                            </div>
                        </div>
                        <div class="form__group u-mb-huge">
                            <div class="form__block form__block--full  form__block--nomargin">
                                <label class="form__label form__label--checkbox">
                                    <input type="checkbox" class="form__checkbox" id="user-rodo1">
                                    <span class="form__checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję regulamin.
                                </label>
                            </div>
                        </div>
                        <div class="form__group form__group--submit u-text-right">
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
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Nazwisko</label>
                                <input type="text" class="form__input" name="surname" required value="Nazwisko">
                                <span class="form__input-error">Tylko polskie znaki a-Z</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">E-mail</label>
                                <input type="email" class="form__input" name="email" required value="email@o2.pl">
                                <span class="form__input-error">Nieprawidłowy adres e-mail</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Tel.</label>
                                <input type="text" class="form__input" name="tel" required value="123456789">
                                <span class="form__input-error">Error occured</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Hasło</label>
                                <input type="password" class="form__input" name="pass" required autocomplete="current-password" >
                                <span class="form__input-error">Hasło musi zawierać od 8 do 14 znaków (a-Z oraz 0-9)</span>
                            </div>
                            <div class="form__block">
                                <label for="" class="form__label form__label--required">Siedziba</label>
                                <input type="text" class="form__input" name="loc" required value="Lokalizacja">
                                <span class="form__input-error">Tylko miejscowość</span>
                            </div>
                        </div>
                        <div class="form__group u-mb-huge">
                            <div class="form__block form__block--full  form__block--nomargin">
                                <label class="form__label form__label--checkbox">
                                    <input type="checkbox" class="form__checkbox" id="user-rodo2">
                                    <span class="form__checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję regulamin.
                                </label>
                            </div>
                            <div class="form__block form__block--full form__block--nomargin">
                                <label class="form__label form__label--checkbox">
                                    <input type="checkbox" class="form__checkbox" id="user-rodo3">
                                    <span class="form__checkmark"></span>Wyrażam zgodę na otrzymywanie newslettera.
                                </label>
                            </div>
                        </div>
                        <div class="form__group form__group--submit u-text-right">
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