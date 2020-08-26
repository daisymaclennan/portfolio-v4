import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogContent from '../components/BlogContent'
import PostHeader from '../components/PostHeader'
import Tag from '../components/Tag'
import StyledLink from '../components/StyledLink'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <div>
            <PostHeader>
                <div>
                    <Tag green>Project</Tag>
                    {frontmatter.categories.map((cat) => (
                        <Tag>{cat}</Tag>
                      
                    ))}
                </div>
                
                <h2>{frontmatter.title}</h2>
            </PostHeader>
            
            <BlogContent
                dangerouslySetInnerHTML={{ __html: html }}
            />

            {frontmatter.link && (
                <StyledLink to={frontmatter.link}>Take a look</StyledLink>
            )}

            {frontmatter.video && (
                <StyledLink to={frontmatter.video}>Video</StyledLink>
            )}

            {frontmatter.github && (
                <StyledLink to={frontmatter.github}>View me on GitHub</StyledLink>
            )}
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
        categories
        link
        video
      }
    }
  }
`