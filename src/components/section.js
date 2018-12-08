import React from "react"
import sectionStyles from "./section.module.scss"

export default ({ title, children }) => (
    <div className={sectionStyles.container}>
        <h1 className={sectionStyles.sectionTitle}>
            <a href="#">{title}</a>
        </h1>
        {children}
    </div>
)

