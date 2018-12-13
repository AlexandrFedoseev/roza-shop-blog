import React from "react"

import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksGallery from "../../components/works"
import Section from "../../components/section"
import ContactForm from "../../components/contactForm"

export default () => (
    <main>
        <Header title={'Букеты'} image={"/assets/images/works/1.jpg"}></Header>
        <Section title={'Букет невесты'}></Section>
        <WorksGallery></WorksGallery>
        <Section title={'Подарочные букеты'}></Section>
        <WorksGallery></WorksGallery>
        <Section title={'Монобукеты'}></Section>
        <WorksGallery></WorksGallery>
        <Section title={'Мужские букеты'}></Section>
        <WorksGallery></WorksGallery>
        <Section title={'Остались вопросы?'}>
            <ContactForm></ContactForm>
        </Section>
        <Footer></Footer>
    </main>
)