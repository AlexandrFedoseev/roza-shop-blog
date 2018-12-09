import React from "react"
import contactFormStyles from "./contactForm.module.scss"

export default ({ children }) => (
    <div style={{marginBottom: '40px'}}>
        <h4>Заказать букет</h4>
        <form name="ContactForm" method="post" data-netlify="true"><input type="hidden" name="form-name" value="ContactForm" />
            <div className={contactFormStyles.form}>
                <div className={contactFormStyles.formInputs}>
                    <div>
                        <fieldset>
                            <input name="name" type="text" id="name" placeholder="Имя" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <input name="phone" type="text" id="phone" placeholder="Телефон" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <input name="email" type="email" id="email" placeholder="Email (по желанию)" />
                        </fieldset>
                    </div>
                </div>
                <div>
                    <fieldset>
                        <textarea name="message" placeholder="Сообщение" rows="8" cols="80" id="message"></textarea>
                    </fieldset>
                </div>
            </div>
            <div>
                <button type="submit">Отправить</button>
            </div>
        </form>
    </div>
)
