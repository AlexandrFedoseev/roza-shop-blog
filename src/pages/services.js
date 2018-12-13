import React from "react"

import styles from "./services.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"
import OffersSection from "../components/offersSection"

export default () => (
    <main>
        <Header title={'Услуги'} image={"/assets/images/22-1_11.jpg"}></Header>
            <Section title={'Услуги'}>
                <OffersSection></OffersSection>
            </Section>
        <Footer></Footer>
    </main>
)
