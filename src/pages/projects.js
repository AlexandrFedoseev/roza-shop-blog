import React from "react"

import styles from "./projects.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"

export default () => (
    <main>
        <Header image={"/assets/images/22-1_11.jpg"}></Header>
            <Section title={'Проекты'}></Section>
        <Footer></Footer>
    </main>
)