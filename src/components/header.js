import React from "react"
import headerStyles from "./header.module.scss"

import SiteMenu from "./siteMenu"
import MenuBtn from "./menuBtn"

export default (props) => (
  <header>
    <div className={headerStyles.siteMenu}>
      <SiteMenu></SiteMenu>
    </div>
    <div className={headerStyles.contacts}>
      <div>
        <img width="198" height="52" src="/assets/images/2337_logo.png" alt="logo" title="RozaAzora"/>
      </div>
      <div className={headerStyles.phones}>
        <div className={headerStyles.centerInBox}>
          <img className={headerStyles.icon} src="/assets/images/phone.svg" />
          <div className={headerStyles.blockContent}>
            <a href="tel:+375293363303">+375 29 336 33 03</a><br />
            <a href="tel:+375172686138">+375 17 268 61 38</a>
          </div>
        </div>
      </div>
      <div className={headerStyles.location}>
        <div className={headerStyles.centerInBox}>
          <img className={headerStyles.icon} src="/assets/images/location.svg" />
          <div className={headerStyles.blockContent}>
            Пр-т Независимости, 186<br/>
            <span className={headerStyles.smallText}>Без выходных с 9:00 до 20:00</span>
          </div>
        </div>
      </div>
      <div>
        <MenuBtn></MenuBtn>
      </div>
    </div>
    <div className={headerStyles.welcome} style={{backgroundImage: `url(${props.image})`}}>
      <div className={headerStyles.welcomeLogo}>
        <div>
            <img src="/assets/images/logo-white.png" />
        </div>
        <h2>
            {props.title}
        </h2>
        {props.buttonTitle &&
          <a href="/contacts">{props.buttonTitle}</a>
        }
      </div>
    </div>
    <div className={headerStyles.mainMenu}>
      <a href="/" >Главная</a>
      <a href="/our-works">Наши работы</a>
      <a href="/contacts">Контакты</a>
    </div>
  </header>
)
