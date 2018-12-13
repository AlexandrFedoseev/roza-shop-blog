import React from "react"

import styles from "./projects.module.scss"
import offersStyles from "../../components/offersSection.module.scss"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Section from "../../components/section"
import Container from "../../components/container";

const Card = props => (
    <a href={props.linkTo} className={offersStyles.card} style={{paddingBottom: `0`}}>
        <div className={offersStyles.imageHolder}>
            <div style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
        <h2 style={{marginTop: `0`}} >{props.title}</h2>
    </a>
)

export default () => (
    <main>
        <Header title={'Наши работы'} image={"/assets/images/22-1_11.jpg"}></Header>
        <Container>
            <div className={offersStyles.container} style={{marginBottom: '20px'}}>
                <Card title={'Букеты'} linkTo={"/our-works/bouquets"} image={'/assets/images/works/1.jpg'}></Card>
                <Card title={'Композиции'} linkTo={"/our-works/compositions"} image={'/assets/images/works/2.jpg'}></Card>
                <Card title={'Сухоцветы и стабилизированные цветы'} linkTo={"/our-works/dried-flowers-and-stabilized-flowers"} image={'/assets/images/works/3.jpg'}></Card>
                <Card title={'Живые стены'} linkTo={"/our-works/living-walls"} image={'/assets/images/works/4.jpg'}></Card>
                <Card title={'Оформление мероприятий'} linkTo={"/our-works/event-design"} image={'/assets/images/works/5.jpg'}></Card>
                <Card title={'Новогодняя флористика'} linkTo={"/our-works/christmas-floristics"} image={'/assets/images/works/6.jpg'}></Card>
            </div>
        </Container>
        <Footer></Footer>
    </main>
)