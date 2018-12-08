import React from "react"
import consSectionStyles from "./consSection.module.scss"

const Con = props => (
    <div className={consSectionStyles.consItem}>
        <img src={props.image} />
        <span className={consSectionStyles.title}>
            {props.title}<br/>{props.title2}
        </span>
    </div>
)

export default () => (
    <div>
        <div className={consSectionStyles.container} style={{marginBottom: '20px'}}>
            <Con image={'/assets/images/bouquet.jpg'} title=" Букет" title2="на счастье"></Con>
            <Con image={'/assets/images/professionals.jpg'} title={'мы - комманда'} title2="профессионалов"></Con>
            <Con image={'/assets/images/world-flowers.jpg'} title={'удивительные цветы'} title2="из 10 стран мира">></Con>
        </div>
    </div>
)
