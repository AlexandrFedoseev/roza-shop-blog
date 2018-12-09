import React from "react"
import footerStyles from "./footer.module.scss"

export default () => (
    <div className={footerStyles.footer}>
        <div className={footerStyles.footerCol}>
            <h3>Мы в соцсетях</h3>
            <div className={footerStyles.footerSocials}>
                <a href="https://www.instagram.com/rozaazora/" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/610d4dc7bd99fb1ff596f6c1b9e3a9b3405d6531/221cc/img/icons/instagram.svg" width="40" height="40" alt="instagram" title="instagram" />
                </a>
            </div>
        </div>
        <div className={footerStyles.footerCol}>
            <h3>Контакты</h3>
            <address>
                <br/>
                <a href="mailto:rozaazora-shop@yandex.by">rozaazora-shop@yandex.by</a><br/><br/>
                Беларусь, Минск,<br/>
                Пр-т Независимости, 186
                <br/>
                <br/>
                <a href="tel:+375293363303">+375 29 336 33 03</a><br/>
                <a href="tel:+375172686138">+375 17 268 61 38</a>
            </address>
        </div>
        <div className={footerStyles.footerCol}>
            <h3>&nbsp;</h3>
        </div>
        <div className={footerStyles.ipInfo}>
            ИП Кузьмук И.В. УНП 193098377 тел.: +375 (29) 336-33-03. Минск 2018.
        </div>
    </div>
)
