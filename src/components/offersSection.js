import React from "react"
import offersSectionStyles from "./offersSection.module.scss"

const Offer = props => (
    <a href={props.linkTo} className={offersSectionStyles.card}>
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
            <Offer linkTo={'/services/wedding-floristry'} image={'/assets/images/weddings.jpg'} title={'Свадебная флористика'} content={'Команда флористов салона цветов "Роза Азора" - профессионалы свадебной флористики'}></Offer>
            <Offer linkTo={'/services/delivery-flowers-and-bouquets'} image={'/assets/images/delivery.jpg'} title={'Доставка цветов и букетов'} content={'Максимум – 2 часа в черте города, минимум усилий с вашей стороны В “Розе Азора” можно оформить подписку на цветы, и адресат будет получать букеты точно в заявленные даты.'}></Offer>
            <Offer linkTo={'/services/interior-design'} image={'/assets/images/interior.jpg'} title={'Оформление интерьеров'} content={'.. и частных, и корпоративных. Наши флористы подберут растения, подстраиваясь под условия освещения, влажности и температуры. Мы знаем некапризные растения, способные вписаться в быстрый жизненный ритм.'}></Offer>
            <Offer linkTo={'/services/service-organizations'} image={'/assets/images/corporations.jpg'} title={'Обслуживание организаций'} content={'50 компаний выбрали наш салон для создания букетов для партнеров, коллег, клиентов и сотрудников, для оформления корпоративных праздников и торжеств.'}></Offer>
            <Offer linkTo={'/services/gift-decor-and-packaging'} image={'/assets/images/decoration.jpg'} title={'Декор и упаковка подарков'} content={'Статуэтки, фигурки, рамы, композиции из живых цветов, кухонные и тематические вещицы - утонченные и нежные, для любого адресата.'}></Offer>
            <Offer linkTo={'/services/stabilized-flowers'} image={'/assets/images/stable-flowers.jpg'} title={'Стабилизированные цветы'} content={'Цветы, обработанные специальным составом, чтобы сохранять живой вид годами. Цветы и соцветия живут в этом виде от 2-х до 5 лет, деревья и кустарники - от 5 до 10 лет.'}></Offer>
        </div>
    </div>
)
