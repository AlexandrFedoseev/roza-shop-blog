import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import ContactForm from "../components/contactForm"

export default function Template({
  data,
}) {
  const pageDescription = `
  Удивить родных и близких оригинальным подарком вам
  поможет салон цветов Роза Азора: авторские букеты,
  экзотические свежие цветы, сувениры, аксессуары для дома`;
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
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
          {"name": "twitter:image", "content": frontmatter.image},

          {"property": "og:type", "content": "business.business"},
          {"property": "og:site_name", "content": "Салон цветов Rozaazora"},
          {"property": "og:title", "content": frontmatter.title},
          {"property": "og:url", "content": frontmatter.path},
          {"property": "og:image", "content": frontmatter.image}
      ]}
  />
        <Header title={frontmatter.title} image={frontmatter.image} ></Header>
        <Container>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
        <Container>
          <ContactForm></ContactForm>
        </Container>
        <Footer></Footer>
    </main>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
      }
    }
  }
`
