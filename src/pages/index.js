import React from "react"
import Helmet from "react-helmet"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"
import OffersSection from "../components/offersSection"
import ConsSection from "../components/consSection"
import ContactForm from "../components/contactForm"
import WorksGallery from "../components/works"

export default function ({ data }) {
    const pageTitle = "Цветочный салон Роза Азора в Минске: букеты, подарки"
    const pageDescription = `
        Удивить родных и близких оригинальным подарком вам
        поможет салон цветов Роза Азора: авторские букеты,
        экзотические свежие цветы, сувениры, аксессуары для дома`;
    const pageImage = "/assets/images/22-1_11.jpg";
    return(
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
                {"property": "og:url", "content": "/"},
                {"property": "og:image", "content": pageImage}
            ]}
            // link={[
            //     {"rel": "canonical", "href": "http://mysite.com/example"},
            //     {"rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png"},
            //     {"rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png"}
            // ]}
        />

    <Header buttonTitle={'Заказать букет'} title={"Салон цветов"} image={pageImage}></Header>
    <Section linkTo={"/services"} title={'Что мы предлагаем'}>
        <OffersSection data={data}></OffersSection>
    </Section>
    <Section linkTo={"/our-works"} title={'Как выглядят наши работы'}></Section>
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
    <Section linkTo={"/contacts"} title={'Остались вопросы?'}>
        <ContactForm></ContactForm>
    </Section>
    <Section title={'Присоединяйтесь к нам в instagram'}>
        instagram
    </Section>
    <Footer></Footer>
    </main>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___title] }
            limit: 6
        ) {
            edges {
                node {
                    frontmatter {
                        path,
                        image,
                        title,
                        info
                    }
                }
            }
        }
    }

`