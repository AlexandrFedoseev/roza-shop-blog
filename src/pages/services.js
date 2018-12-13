import React from "react"

import styles from "./services.module.scss"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"

export default () => (
    <main>
        <Header></Header>
            <Section title={'Услуги'}></Section>
        <Footer></Footer>
    </main>
)
