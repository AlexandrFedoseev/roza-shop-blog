import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import ContactForm from "../components/contactForm"

export default function Template({
  data,
}) {
  console.log(data);
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <main>
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
        title
        image
      }
    }
  }
`
