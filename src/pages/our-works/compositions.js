/*Цветочные композиции в шляпных коробках, корзинках в Минске

Купить композицию из живых цветов - сделать необычный и оригинальный подарок для любимых, близких и родных! Быстрая доставка в Минске
*/import React from "react"

import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksGallery from "../../components/works"
import Section from "../../components/section"
import ContactForm from "../../components/contactForm"

export default () => (
    <main>
        <Header title={'Композиции'} image={"/assets/images/works/2.jpg"}></Header>
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