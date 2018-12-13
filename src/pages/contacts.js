import React from "react"

import styles from "./contacts.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"

export default () => (
    <main>
        <Header image={"/assets/images/22-1_11.jpg"}></Header>
            <Section title={'Контакты'}></Section>
        <Footer></Footer>
    </main>
)
