import React from "react"
import Helmet from "react-helmet"
import offersStyles from "../components/offersSection.module.scss"
import Header from "../components/header"
import { graphql } from "gatsby"

import Footer from "../components/footer"
import Container from "../components/container";

const Card = props => (
    <a href={props.linkTo} className={offersStyles.card} style={{paddingBottom: `0`}}>
        <div className={offersStyles.imageHolder}>
            <div style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
        <h2>{props.title}</h2>
    </a>
)

export default function ({data}) {
    const pageTitle = "Цветы, букеты, композиции, оформление свадьбы в Минске"
    const pageDescription = `
        Купить цветы в Минске от флористов салона Роза Азора.
        Заказать быструю доставку букетов и композиций по Минску
        `;
    const pageImage = "/assets/images/22-1_11.jpg";
    return(<main>
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
        <Header title={'Наши работы'} image={"/assets/images/22-1_11.jpg"} data={data.allContactsYaml}></Header>
        <Container>
            <div className={offersStyles.container} style={{marginBottom: '20px'}}>
                <Card title={'Букеты'} linkTo={"/our-works/bouquets"} image={'/assets/images/works/1.jpg'}></Card>
                <Card title={'Композиции'} linkTo={"/our-works/compositions"} image={'/assets/images/works/2.jpg'}></Card>
                <Card title={'Стабилизированные цветы'} linkTo={"/our-works/stabilized-flowers"} image={'/assets/images/works/3.jpg'}></Card>
                <Card title={'Живые стены'} linkTo={"/our-works/living-walls"} image={'/assets/images/works/4.jpg'}></Card>
                <Card title={'Оформление мероприятий'} linkTo={"/our-works/event-design"} image={'/assets/images/works/5.jpg'}></Card>
                <Card title={'Новогодняя флористика'} linkTo={"/our-works/christmas-floristics"} image={'/assets/images/works/6.jpg'}></Card>
            </div>
        </Container>
        <Footer data={data.allContactsYaml}></Footer>
    </main>)
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