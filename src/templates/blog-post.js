import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
// import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'
import 'prismjs/themes/prism-tomorrow.css'
import logo from '../../static/favicon.png'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet>
          {/* General tags */}
          <title>{`${post.frontmatter.title}`}</title>
          <meta name="description" content={post.excerpt} />

          {/* OpenGraph tags */}
          {/*<meta property="og:url" content={url} />*/}
          {/*<meta property="og:type" content="article" />*/}
          {/*<meta property="og:title" content={title} />*/}
          {/*<meta property="og:description" content={description} />*/}
          {/*<meta property="og:image" content={image} />*/}
          {/*<meta property="fb:app_id" content={config.fbAppID} />*/}

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site:id" content="@noah_nak" />
          <meta name="twitter:title" content={post.frontmatter.title} />
          <meta name="twitter:image" content={logo} />
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

        <div dangerouslySetInnerHTML={{ __html: post.html }}/>

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
        author
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
