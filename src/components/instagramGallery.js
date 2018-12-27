import React from "react"
import styles from "./instagramGallery.module.scss"

export default ({ images }) => (
    <a href="https://www.instagram.com/rozaazora/" target="_blank" rel="noopener noreferrer" className={styles.gallery}>
        {images.map((img, i) => {
            return (<div style={{backgroundImage: `url(${img.image})`}} key={i}></div>) 
            })
        }
    </a>
)
