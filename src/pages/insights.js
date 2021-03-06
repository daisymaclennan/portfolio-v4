import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"

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
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/insights/"}}) {
    edges {
      node {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          categories
        }
        fileAbsolutePath
      }
    }
  }
}
`