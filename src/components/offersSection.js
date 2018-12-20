import React from "react"
import offersSectionStyles from "./offersSection.module.scss"

const Offer = props => (
    <a href={props.linkTo} className={offersSectionStyles.card}>
        <div className={offersSectionStyles.imageHolder}>
            <div style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <span className={offersSectionStyles.readFullButton}>
            Читать полностью
        </span>
    </a>
)

export default function ({slugs}) { 
    const newOrder = [
        slugs.allMarkdownRemark.edges[3],
        slugs.allMarkdownRemark.edges[2],
        slugs.allMarkdownRemark.edges[5],
        slugs.allMarkdownRemark.edges[1],
        slugs.allMarkdownRemark.edges[0],
        slugs.allMarkdownRemark.edges[4]
    ]
    return(
        <div>
            <div className={offersSectionStyles.container} style={{marginBottom: '20px'}}>
            {newOrder.map((edge, i) => {
                    const node = edge.node.frontmatter;
                    return (<Offer linkTo={node.path} image={node.image} title={node.title} content={node.info} key={i}/>) 
                })
            }
            </div>
        </div>
    )
}
