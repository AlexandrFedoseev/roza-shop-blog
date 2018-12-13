import React from "react"

import styles from "./index.module.scss"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"
import OffersSection from "../components/offersSection"
import ConsSection from "../components/consSection"
import ContactForm from "../components/contactForm"
import WorksGallery from "../components/works"

export default () => (
    <main>
    <Header buttonTitle={'Заказать букет'} title={"Салон цветов"} image={"/assets/images/22-1_11.jpg"}></Header>
    <Section title={'Что мы предлагаем'}>
        <OffersSection></OffersSection>
    </Section>
    <Section title={'Как выглядят наши работы'}>
    </Section>
    <WorksGallery></WorksGallery>
    <Section title={'Почему именно "Роза Азора"'}>
        <ConsSection></ConsSection>
    </Section>
    <Container>
        <p>
            &laquo;Роза Азора&raquo;&nbsp;&mdash; это известный в&nbsp;Минске и&nbsp;нежно 
            любимый многими салон цветов. В&nbsp;нем работает команда флористов, мастеров 
            своего дела. Мы&nbsp;единственные в&nbsp;своем роде, потому что мы&nbsp;продаем 
            не&nbsp;цветы&nbsp;&mdash; мы&nbsp;выстраиваем мосты между людьми: от&nbsp;сердца 
            к&nbsp;сердцу, от&nbsp;души к&nbsp;душе. Наши букеты для многих стали неотъемлемой 
            частью жизни, ведь они делают любовь искренней, дружбу&nbsp;&mdash; крепкой, 
            партнерство&nbsp;&mdash; открытым.
        </p>
        <p>
            Феномен &laquo;Роза Азора&raquo; не&nbsp;объяснить словами. Это целый мир 
            благородных поступков, красивых историй, невероятных обстоятельств и&nbsp;сказочной 
            красоты событий. Каждый день мы&nbsp;участвуем в&nbsp;важнейших моментах вашей 
            жизни, выражая эмоции в&nbsp;прекрасных растениях. И&nbsp;наши букеты творят чудеса. 
            Однажды открыв для себя необыкновенную силу цветов, мужчины никогда не&nbsp;отпускают 
            это средство, а&nbsp;женщины становятся счастливее. Мы&nbsp;работаем для вас 
            и&nbsp;влюблены в&nbsp;свое дело. Мы&nbsp;знаем все нюансы. Мы&nbsp;знаем секреты 
            счастья!
        </p>
    </Container>
    <Section title={'Остались вопросы?'}>
        <ContactForm></ContactForm>
    </Section>
    <Section title={'Присоединяйтесь к нам в instagram'}>
        instagram
    </Section>
    <Footer></Footer>
    </main>
)
