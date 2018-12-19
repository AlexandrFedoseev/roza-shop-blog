/*Рождественские и новогодние венки, композиции в Минске

Купить новогодний подарок - рождественский венок, композицию из живой ели или букет в салоне цветов Роза Азора. Новогодние и елочные украшения
*/

import React from "react"

import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksGallery from "../../components/works"
import Section from "../../components/section"
import ContactForm from "../../components/contactForm"

export default () => (
    <main>
        <Header title={'Новогодняя флористика'} image={"/assets/images/works/6.jpg"}></Header>
        <Section title={'Как выглядят наши работы'}></Section>
        <WorksGallery></WorksGallery>
        <Section title={'Как выглядят наши работы'}></Section>
        <WorksGallery></WorksGallery>
        <Section title={'Как выглядят наши работы'}></Section>
        <WorksGallery></WorksGallery>
        <Section title={'Остались вопросы?'}>
            <ContactForm></ContactForm>
        </Section>
        <Footer></Footer>
    </main>
)