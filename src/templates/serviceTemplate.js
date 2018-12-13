import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Section from "../components/section"

export default function Template({
  data,
}) {
  console.log(data);
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <main>
        <Header image={frontmatter.image} ></Header>
        <Section title={frontmatter.title}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Section>
    </main>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
