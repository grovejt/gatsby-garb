import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Blog = ({ data, pageContext }) => {
  // const data = useStaticQuery(getBlogData)
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`
  return (
    <Layout>
      <div>
        <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
          Gatsby Garb Blog
        </h1>
        <h4>
          <Link to="/">Go back to the homepage</Link>
        </h4>
        <>
          <h4>{data.allMarkdownRemark.totalCount} Post(s)</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <h3>
                  <Link to={`posts${node.fields.slug}`}>
                    {node.frontmatter.title}
                  </Link>{" "}
                  <span style={{ color: "#bbb" }}>
                    - {node.frontmatter.fromDate} ({node.frontmatter.longDate})
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            )
          })}
        </>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: 300,
            margin: "0 auto"
          }}
        >
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
              {index + 1}
            </Link>
          ))}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          timeToRead
          frontmatter {
            title
            longDate: date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
            fromDate: date(fromNow: true)
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
