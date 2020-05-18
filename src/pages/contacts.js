import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from "./contacts.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import ContactForm from "../components/contactForm"


export default function ({ data }) {
    console.log(data);
    const pageTitle = data.allContactsYaml.edges[0].node.title;
    const pageDescription = data.allContactsYaml.edges[0].node.description;
    const pageImage = data.allContactsYaml.edges[0].node.seoimage;
    const state = {
        center: [data.allContactsYaml.edges[0].node.lat, data.allContactsYaml.edges[0].node.lon],
        zoom: 18,
        controls: ['zoomControl', 'fullscreenControl'],
    };
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
                {"property": "og:url", "content": "/contacts"},
                {"property": "og:image", "content": pageImage}
            ]}
        />
        <Header title={'Контакты'}  image={data.allContactsYaml.edges[0].node.image} data={data.allContactsYaml}></Header>
            <Container>
                <p className={styles.firstContainer}>
                    Позвоните нам! И мы с удовольствием ответим на все Ваши вопросы и расскажем все подробности про наши услуги.
                </p>
            </Container>
            <div className={styles.contactBox}>
                <div className={styles.places}>
                <h4>Контакты</h4>
                <p>
                    Беларусь, Минск,<br />{data.allContactsYaml.edges[0].node.location}
                    <br />
                
                    <br />
                    <a href={"tel:" + data.allContactsYaml.edges[0].node.phone1.replace(/\s/g, '')}>{data.allContactsYaml.edges[0].node.phone1}</a><br />
                    <a href={"tel:" + data.allContactsYaml.edges[0].node.phone2.replace(/\s/g, '')}>{data.allContactsYaml.edges[0].node.phone2}</a>
                </p>
                </div>
                <div className={styles.location}>
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
                </div>
            </div>
            <Container>
                <ContactForm />
            </Container>
            
        <Footer data={data.allContactsYaml}></Footer>
    </main>
)
}

export const pageQuery = graphql`
    query {
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
