import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import Section from "../components/section"
import ContactForm from "../components/contactForm"
import WorksGallery from "../components/works"

const WorkSection = ({ block }) => (
    <div>
        <Section  title={block.title} />
        <WorksGallery images={block.works} />
    </div>
)

export default function Template({
  data,
}) {
  console.log(data);
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const pageDescription = frontmatter.description;
  return (
    <main>
    <Helmet
      htmlAttributes={{"lang": "ru", "amp": undefined}} // amp takes no value
      title={frontmatter.title}
      base={{"href": "/"}}
      meta={[
          {"name": "description", "content": pageDescription},
          {"name": "theme-color", "content": "#fff"},
          {"name": "geo.placename", "content": "Minsk"},
          {"name": "geo.region", "content": "BY"},

          {"name": "twitter:card", "content": "summary"},
          {"name": "twitter:site", "content": "@beflorist"},
          {"name": "twitter:title", "content": frontmatter.title},
          {"name": "twitter:description", "content": pageDescription},
          {"name": "twitter:image", "content": frontmatter.seoimage},

          {"property": "og:type", "content": "business.business"},
          {"property": "og:site_name", "content": "Салон цветов Rozaazora"},
          {"property": "og:title", "content": frontmatter.title},
          {"property": "og:url", "content": frontmatter.path},
          {"property": "og:image", "content": frontmatter.seoimage}
      ]}
  />
        <Header title={frontmatter.title} image={frontmatter.image} data={data.allContactsYaml}></Header>
        <Container>
            <div dangerouslySetInnerHTML={{ __html: html }} style={{paddingTop: "3.64rem"}} />
        </Container>
        {
            frontmatter.block.map((block, i) => {
                return (<WorkSection block={block} key={i}/>) 
            })
        }
        <Container>
          <ContactForm></ContactForm>
        </Container>
        <Footer data={data.allContactsYaml}></Footer>
    </main>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path,
        image,
        title,
        info,
        slugimage,
        seotitle,
        description,
        seoimage,
        block {
          title,
          image
          works {
            alt
            image
          }
        }
      }
    },
      allContactsYaml {
        edges {
            node {
                title
                description
                seoimage
                image
                phone1
                phone2
                location
                lat
                lon
                worktime
            }
        }
      }
  }
`
