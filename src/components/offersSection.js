import React from "react"
import offersSectionStyles from "./offersSection.module.scss"

const Offer = props => (
    <a href="#" className={offersSectionStyles.card}>
        <div className={offersSectionStyles.imageHolder}>
            <div style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <span className={offersSectionStyles.readFullButton}>
            Читать полностью
        </span>
    </a>
)

export default () => (
    <div>
        <div className={offersSectionStyles.container} style={{marginBottom: '20px'}}>
            <Offer image={'/assets/images/22-1_11.jpg'} title="Свадебная флористика" content={'Команда флористов салона цветов "Роза Азора" - профессионалы свадебной флористики'}></Offer>
            <Offer image={'/assets/images/22-1_11.jpg'} title={'Доставка цветов и букетов'} content={'Максимум – 2 часа в черте города, минимум усилий с вашей стороны В “Розе Азора” можно оформить подписку на цветы, и адресат будет получать букеты точно в заявленные даты.'}></Offer>
            <Offer image={'/assets/images/22-1_11.jpg'} title={'Оформление интерьеров'} content={'.. и частных, и корпоративных. Наши флористы подберут растения, подстраиваясь под условия освещения, влажности и температуры. Мы знаем некапризные растения, способные вписаться в быстрый жизненный ритм.'}></Offer>
            <Offer image={'/assets/images/22-1_11.jpg'} title={'Обслуживание организаций'} content={'50 компаний выбрали наш салон для создания букетов для партнеров, коллег, клиентов и сотрудников, для оформления корпоративных праздников и торжеств.'}></Offer>
            <Offer image={'/assets/images/22-1_11.jpg'} title={'Предметы декора'} content={'Статуэтки, фигурки, рамы, композиции из живых цветов, кухонные и тематические вещицы - утонченные и нежные, для любого адресата.'}></Offer>
            <Offer image={'/assets/images/22-1_11.jpg'} title={'Упаковка подарков'} content={'Ваш подарок в винтажной картонной коробке, в сундуке, в крафт-бумаге, шелковой бумаге “тешью”, в декоративном текстиле, в японской газете или в натуральной пальмовой коре. Мы гарантируем, что угодим получателю.'}></Offer>
        </div>
    </div>
)
