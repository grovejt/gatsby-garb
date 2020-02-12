import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          id
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

const ThirdPage = () => {
  const data = useStaticQuery(getImageData)
  return (
    <Layout>
      <h3>Image File Data</h3>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Relative Path</th>
            <th>Size</th>
            <th>Extension</th>
            <th>Birth Time</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => {
            return (
              <tr key={index}>
                <td>{node.id}</td>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Link to="/page-2">Go to page 2</Link>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default ThirdPage
