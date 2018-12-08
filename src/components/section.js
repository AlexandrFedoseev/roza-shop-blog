import React from "react"
import sectionStyles from "./section.module.scss"

export default ({ children }) => (
    <div className={sectionStyles.container}>
        <h1 className={sectionStyles.sectionTitle}>
            <a href="#">Услуги</a>
        </h1>
        {children}
    </div>
)

