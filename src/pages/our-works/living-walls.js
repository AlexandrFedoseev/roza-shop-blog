import React from "react"

import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksGallery from "../../components/works"
import Section from "../../components/section"
import ContactForm from "../../components/contactForm"

export default () => (
    <main>
        <Header title={'Живые стены'} image={"/assets/images/works/4.jpg"}></Header>
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