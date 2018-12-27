import React from "react"
import consSectionStyles from "./consSection.module.scss"

const Con = props => (
    <div className={consSectionStyles.consItem}>
        <img alt={'ok icon'} src={props.image} />
        <span className={consSectionStyles.conText}>
            {props.conText}
        </span>
    </div>
)

export default ({ cons }) => (
    <div>
        <div className={consSectionStyles.container} style={{marginBottom: '20px'}}>
            {cons.map((con, i) => {
                    return (<Con image={'/assets/images/double-tick.png'} conText={con.point} key={i} />) 
                })
            }
        </div>
    </div>
)







