import React from "react"
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from "./contacts.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import ContactForm from "../components/contactForm"

const state = {
    center: [53.947696, 27.697678],
    zoom: 18,
    controls: ['zoomControl', 'fullscreenControl'],
};

export default () => (
    <main>
        <Header title={'Контакты'}  image={"/assets/images/22-1_11.jpg"}></Header>
            <Container>
                <p className={styles.firstContainer}>
                    Отправьте нам заявку либо позвоните по телефонам, указанным ниже. Мы с удовольствием ответим на все Ваши вопросы и расскажем все подробности про наши услуги.
                </p>
            </Container>
            <Container>
                <h4>Контакты</h4>
                <p>
                    <a href="mailto:rozaazora-shop@yandex.by">rozaazora-shop@yandex.by</a>
                    <br />
                
                    <br />
                    <a href="tel:+375293363303">+375 29 336 33 03</a><br />
                    <a href="tel:+375172686138">+375 17 268 61 38</a>
                </p>
            </Container>
            <Container>
                <ContactForm />
            </Container>
            <Container>
                <h4>Адрес</h4>
                <p>
                    Беларусь, Минск,
                    Пр-т Независимости, 186
                </p>
            </Container>
            <YMaps
                query={{
                ns: 'use-load-option',
                load:
                    'Map,control.ZoomControl,control.FullscreenControl',
                }}
            >
            <Map className={styles.map} defaultState={state}>
              <Placemark
                defaultGeometry={state.center}
                properties={{
                    balloonContentBody:
                    'Салон цветов "Роза Азора"',
                }}
            />
            </Map>
          </YMaps>
        <Footer></Footer>
    </main>
)
