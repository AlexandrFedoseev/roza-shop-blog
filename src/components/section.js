import React from "react"
import sectionStyles from "./section.module.scss"

export default ({ title, linkTo, children }) => (
    <div className={sectionStyles.container}>
        <h1 className={sectionStyles.sectionTitle}>
            {linkTo &&
                <a href={linkTo}>{title}</a>
            }
            {!linkTo &&
                <span>{title}</span>
            }
        </h1>
        {children}
    </div>
)

