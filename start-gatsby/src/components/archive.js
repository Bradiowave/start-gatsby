import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    title
                    slug
                }
            }
        }
    }
}
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <aside>
            <h3>Archive</h3>
            {allMarkdownRemark.edges.map(edge => (
                <li>
                    {edge.node.frontmatter.title}
                </li>
            ))}
        </aside>
      </>
    )}
  />
)

export default Archive
