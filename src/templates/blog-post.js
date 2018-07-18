import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import 'prismjs/themes/prism-tomorrow.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={post.excerpt} />

          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={"https://noah.plus" + this.props.location.pathname} />
          <meta property="og:image" content="https://noah.plus/icons/icon-512x512.png" />
          <meta property="og:site_name" content="noah.plus" />
          <meta property="og:description" content={post.excerpt} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site:id" content="@noah_nak" />

          <meta property="fb:admins" content="100009792034310" />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{
            letterSpacing: '0.08em',
          }}
        />

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}
        >
          <li style={{marginRight: 'auto'}}>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                ← {next.frontmatter.title}
              </Link>
            }
          </li>
          <li style={{marginLeft: 'auto'}}>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title} →
              </Link>
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
