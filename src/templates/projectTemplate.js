import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogContent from '../components/BlogContent'
import PostHeader from '../components/PostHeader'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <div>
            <PostHeader>
                <h2>{frontmatter.title}</h2>
            </PostHeader>
            
            <BlogContent
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </Layout>
    
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`