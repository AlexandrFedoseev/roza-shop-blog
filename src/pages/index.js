import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"
import OffersSection from "../components/offersSection"
import ConsSection from "../components/consSection"
import ContactForm from "../components/contactForm"
import WorksGallery from "../components/works"
import InstagramGallery from "../components/instagramGallery"

export default function(props) {
    const pageTitle = props.data.allHomeYaml.edges[0].node.title;
    const pageDescription = props.data.allHomeYaml.edges[0].node.description;
    const pageImage = props.data.allHomeYaml.edges[0].node.image;
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

    <Header buttonTitle={'Заказать букет'} title={"Салон цветов"} image={pageImage} data={props.data.allContactsYaml}></Header>
    <Section linkTo={"/services"} title={'Что мы предлагаем'}>
        <OffersSection slugs={props.data}></OffersSection>
    </Section>
    <Section linkTo={"/our-works"} title={'Как выглядят наши работы'}></Section>
    <WorksGallery images={props.data.allHomeYaml.edges[0].node.works}></WorksGallery>
    <Section title={'Почему именно "Роза Азора"'}>
        <ConsSection cons={props.data.allHomeYaml.edges[0].node.cons} ></ConsSection>
    </Section>
    <Container>
        <div dangerouslySetInnerHTML={{ __html: props.data.allHomeYaml.edges[0].node.about }} />
    </Container>
    <Section linkTo={"/contacts"} title={'Остались вопросы?'}>
        <ContactForm></ContactForm>
    </Section>
    <Section linkTo={"https://www.instagram.com/rozaazora/"} title={'Присоединяйтесь к нам в instagram'} />
    <InstagramGallery images={props.data.allHomeYaml.edges[0].node.instagram} />
    <Footer data={props.data.allContactsYaml}></Footer>
    </main>
    )
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___title] }
            filter: { frontmatter: { path: {regex: "/services/"}  } }
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
        },
        allHomeYaml {
          edges {
            node {
              title
              description
              seoimage
              image
              works {
                alt
                image
              }
              cons {
                point
              }
              about
              instagram {
                alt
                image
              }
            }
          }
        }
        allContactsYaml {
            edges {
                node {
                    title
                    description
                    seoimage
                    image
                    phone1
                    phone2
                    location
                    lat
                    lon
                    worktime
                }
            }
        }
    }
`
