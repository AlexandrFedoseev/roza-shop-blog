import React from "react"
import styles from "./instagramGallery.module.scss"

export default () => (
    <a href="https://www.instagram.com/rozaazora/" target="_blank" rel="noopener noreferrer" className={styles.gallery}>
        <div style={{backgroundImage: `url(${"/assets/images/inst/instagram-1.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/inst/instagram-2.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/inst/instagram-3.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/inst/instagram-4.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/inst/instagram-5.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/inst/instagram-6.jpg"})`}}></div>
    </a>
)
