import React from "react"
import worksStyles from "./works.module.scss"

export default ({ images }) => (
    <div className={worksStyles.gallery}>
        {images.map((img, i) => {
            return (<div style={{backgroundImage: `url(${img.image})`}} key={i}></div>) 
            })
        }
    </div>
)
