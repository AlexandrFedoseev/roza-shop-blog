import React from "react"
import Helmet from "react-helmet"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksGallery from "../../components/works"
import Section from "../../components/section"
import ContactForm from "../../components/contactForm"

export default function () { 
    const pageTitle = "Стены из мха, стабилизированных цветов в Минске"
    const pageDescription = `
            Вертикальное озеленения стен, фитостена - с ними ваш 
            интерьер и экстерьер станет еще более уютным. Заказать 
            стену из стабилизированных растений 
        `;
    const pageImage = "/assets/images/works/4.jpg";
    return (
    <main>
    <Helmet
        htmlAttributes={{"lang": "ru", "amp": undefined}} // amp takes no value
        title={pageTitle}
        base={{"href": "/"}}
        meta={[
            {"name": "description", "content": pageDescription},
            {"name": "theme-color", "content": "#fff"},
            {"name": "geo.placename", "content": "Minsk"},
            {"name": "geo.region", "content": "BY"},

            {"name": "twitter:card", "content": "summary"},
            {"name": "twitter:site", "content": "@beflorist"},
            {"name": "twitter:title", "content": pageTitle},
            {"name": "twitter:description", "content": pageDescription},
            {"name": "twitter:image", "content": pageImage},

            {"property": "og:type", "content": "business.business"},
            {"property": "og:site_name", "content": "Салон цветов Rozaazora"},
            {"property": "og:title", "content": pageTitle},
            {"property": "og:url", "content": "/our-works"},
            {"property": "og:image", "content": pageImage}
        ]}
    />
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
)}