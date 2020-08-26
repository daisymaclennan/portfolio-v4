import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return(
    <Layout>
       {edges.map((edge) => (
         <Card node={edge.node} />
       ))}
    </Layout>
  )
}

export const pageQuery = graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/projects/"}}) {
    edges {
      node {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          categories
        }
      }
    }
  }
}
`