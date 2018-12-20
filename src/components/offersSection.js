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

export default function (props) { 
    const data = props.slugs;
    console.log(data)
    return(
        <div>
            <div className={offersSectionStyles.container} style={{marginBottom: '20px'}}>
            {data.allMarkdownRemark.edges.map((edge, i) => {
                    const node = edge.node.frontmatter;
                    return (<Offer linkTo={node.path} image={node.image} title={node.title} content={node.info} key={i}/>) 
                })
            }
            </div>
        </div>
    )
}
