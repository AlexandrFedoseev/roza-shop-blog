import React from "react"
import consSectionStyles from "./consSection.module.scss"

const Con = props => (
    <div className={consSectionStyles.consItem}>
        <img src={props.image} />
        <span className={consSectionStyles.conText}>
            {props.conText}
        </span>
    </div>
)

export default () => (
    <div>
        <div className={consSectionStyles.container} style={{marginBottom: '20px'}}>
            <Con image={'/assets/images/double-tick.png'} conText={"Опыт - дарим положительные эмоции более 10 лет"}></Con>
            <Con image={'/assets/images/double-tick.png'} conText={"Эксклюзивный ассортимент из 10 стран мира"}></Con>
            <Con image={'/assets/images/double-tick.png'} conText={"Авторский подход к каждому букету - будь то цветочный комплимент или изысканный букет"}></Con>
            <Con image={'/assets/images/double-tick.png'} conText={'Наш салон - это место, где в гармонии живут цветы, красота, уют и искусство. Приходите к нам в гости и окунитесь в прекрасный мир салона цветов "Роза Азора"'}></Con>
        </div>
    </div>
)







