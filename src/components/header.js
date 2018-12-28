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
        <a href="/">
          <img width="198" height="52" src="/assets/images/2337_logo.png" alt="logo" title="RozaAzora"/>
        </a>
      </div>
      <div className={headerStyles.phones}>
        <div className={headerStyles.centerInBox}>
          <img className={headerStyles.icon} src="/assets/images/phone.svg" alt={'phone'} />
          <div className={headerStyles.blockContent}>
            <a href={"tel:" + props.data.edges[0].node.phone1.replace(/\s/g, '')}>{props.data.edges[0].node.phone1}</a><br />
            <a href={"tel:" + props.data.edges[0].node.phone2.replace(/\s/g, '')}>{props.data.edges[0].node.phone2}</a>
          </div>
        </div>
      </div>
      <div className={headerStyles.location}>
        <div className={headerStyles.centerInBox}>
          <img className={headerStyles.icon} src="/assets/images/location.svg"  alt={'location'} />
          <div className={headerStyles.blockContent}>
            {props.data.edges[0].node.location}<br/>
            <span className={headerStyles.smallText}>{props.data.edges[0].node.worktime}</span>
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
            <img src="/assets/images/logo-white.png" alt={'rozaazora'} />
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
