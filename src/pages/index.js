import React from "react"

import styles from "./index.module.scss"
import Container from "../components/container"
import Header from "../components/header"
console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <main>
    <Header></Header>
    <Container>
        <h1>Richard Hamming on Luck</h1>
        <img src="assets/images/22-1_11.jpg" alt="main-theme"/>
        <div>
        <p>
            From Richard Hamming’s classic and must-read talk, “
            <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
            </a>
            ”.
        </p>
        <blockquote>
            <p>
            There is indeed an element of luck, and no, there isn’t. The prepared
            mind sooner or later finds something important and does it. So yes, it
            is luck.{" "}
            <em>
                The particular thing you do is luck, but that you do something is
                not.
            </em>
            </p>
        </blockquote>
        </div>
        <p>Posted April 09, 2011</p>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />

        <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </Container>
    </main>
)
