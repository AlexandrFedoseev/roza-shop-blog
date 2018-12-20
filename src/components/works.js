import React from "react"
import worksStyles from "./works.module.scss"

export default () => (
    <div className={worksStyles.gallery}>
        <div style={{backgroundImage: `url(${"/assets/images/works/1.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/works/2.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/works/3.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/works/4.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/works/5.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/works/6.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/works/7.jpg"})`}}></div>
        <div style={{backgroundImage: `url(${"/assets/images/works/8.jpg"})`}}></div>
    </div>
)
