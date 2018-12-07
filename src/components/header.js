import React from "react"
import headerStyles from "./header.module.scss"

export default () => (
  <header>
    <ul className={headerStyles.mainMenu}>
      <li>Главная</li>
      <li>О нас</li>
      <li>Отзывы</li>
      <li>Оплата и доставка</li>
      <li>Оформление заказа</li>
      <li>Контакты</li>
    </ul>
    <div className={headerStyles.contacts}>
      <div>
        <img width="198" height="52" src="/assets/images/2337_logo.png" alt="logo" title="RozaAzora"/>
      </div>
      <div>
        <a href="tel:+375293363303">+375 29 336 33 03</a><br />
        <a href="tel:+375172686138">+375 17 268 61 38</a>
      </div>
      <div>
        Пр-т Независимости, 186<br/>
        Мы раьотаем без выходных с 9:00 до 20:00
      </div>
    </div>
    <div className={headerStyles.comingSoon}>
      <div>
        <span className={headerStyles.ws}>вебсайт</span>
        <span className={headerStyles.cs}>в раз&shy;ра&shy;бот&shy;ке<i>...</i></span>
        <span className={headerStyles.a1}>еще один проект от Сашки</span>
      </div>
    </div>
    <div className={headerStyles.welcome} style={{backgroundImage: `url(${"/assets/images/22-1_11.jpg"})`}}>
      <div className={headerStyles.welcomeLogo}>
        <div>
            <img src="/assets/images/logo-white.png" />
        </div>
        <h2>
            Салон цветов
        </h2>
      </div>
    </div>
  </header>
)
