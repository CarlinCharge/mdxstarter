import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log(' graphql data', data)
  const caseStudies = data.allMdx.edges
  return (
  <Layout>
    <SEO title="Home" />
    {caseStudies.map((item, index) => {
      return <Link to key={index}> {item.node.frontmatter.title}
      </Link>
    })}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)
}

export const pageQuery = graphql`

  query ContentIndex {

    allMdx(

      filter: {

        fileAbsolutePath: {glob: "**/content/case-studies**"}

      }

    ) {

      edges {

        node {

          id

          frontmatter {

            title

          }

        }

      }

    }

  }

`
export default IndexPage
