export const template = `
    <section class="register">

        <div class="register__nav">
            <!-- zmienić na button type button -->
            <label for="toggle-register" class="register__nav-button register__nav-button--active">Użytkownik</label>
            <label for="toggle-register" class="register__nav-button">Firma</label>
        </div>

        <input class="register__switcher" type="checkbox" id="toggle-register">

        <div class="register__content">

            <div class="register__block register__block--user">
                
                <div class="register__bg-img register__bg-img--user">
                    &nbsp;
                </div>
                
                <form action="#user" class="form form--user">
                    <p class="heading-primary u-mb-biggest u-text-center">Formularz rejestracyjny dla użytkowników</p>

                    <div class="form__group u-mb-big">
                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Imię</label>
                            <input type="text" class="form__input">
                        </div>
                        
                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Nazwisko</label>
                            <input type="text" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">E-mail</label>
                            <input type="email" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Tel.</label>
                            <input type="text" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Hasło</label>
                            <input type="password" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Miasto</label>
                            <input type="text" class="form__input">
                        </div>
                    </div>

                    <div class="form__group u-mb-huge">
                        <div class="form__block form__block--full  form__block--nomargin">
                            <label class="form__label form__label--checkbox">
                                <input type="checkbox" class="form__checkbox" id="user-rodo">
                                <span class="form__checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję regulamin.
                            </label>
                        </div>
                    </div>

                    <div class="form__group form__group--submit u-text-right">
                        <input type="submit" class="form__submit" value="Zarejestruj">
                    </div>

                </form>
                
            </div>
        
            <div class="register__block register__block--company">
                
                <form action="#company" class="form form--company">
                    <p class="heading-primary u-mb-biggest u-text-center">Formularz rejestracyjny dla przedsiębiorców</p>

                    <div class="form__group u-mb-big">
                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Imię</label>
                            <input type="text" class="form__input">
                        </div>
                        
                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Nazwisko</label>
                            <input type="text" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">E-mail</label>
                            <input type="email" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Tel.</label>
                            <input type="text" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Hasło</label>
                            <input type="password" class="form__input">
                        </div>

                        <div class="form__block">
                            <label for="" class="form__label form__label--required">Siedziba</label>
                            <input type="text" class="form__input">
                        </div>
                    </div>

                    <div class="form__group u-mb-huge">
                        <div class="form__block form__block--full  form__block--nomargin">
                            <label class="form__label form__label--checkbox">
                                <input type="checkbox" class="form__checkbox" id="user-rodo">
                                <span class="form__checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję regulamin.
                            </label>
                        </div>

                        <div class="form__block form__block--full form__block--nomargin">
                            <label class="form__label form__label--checkbox">
                                <input type="checkbox" class="form__checkbox" id="user-rodo">
                                <span class="form__checkmark"></span>Wyrażam zgodę na otrzymywanie newslettera.
                            </label>
                        </div>
                    </div>

                    <div class="form__group form__group--submit u-text-right">
                        <input type="submit" class="form__submit" value="Zarejestruj">
                    </div>

                </form>
                
                <div class="register__bg-img register__bg-img--company">
                    &nbsp;
                </div>
                
            </div>
        
        </div>
        
    </section>
`