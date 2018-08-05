import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import '../../static/prism-darcula.css'
import TweetButton from '../components/TweetButton/TweetButton'
import FacebookButton from '../components/FacebookButton/FacebookButton'
import HatenaButton from '../components/HatenaButton/HatenaButton'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pathContext
    const currentURL = 'https://noah.plus' + this.props.location.pathname

    return (
      <div>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={post.excerpt}/>

          <meta property="og:title" content={post.frontmatter.title}/>
          <meta property="og:type" content="article"/>
          <meta property="og:url" content={currentURL}/>
          <meta property="og:image" content="https://noah.plus/icons/icon-512x512.png"/>
          <meta property="og:site_name" content="noah.plus"/>
          <meta property="og:description" content={post.excerpt}/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site:id" content="@noah_nak"/>

          <meta property="fb:admins" content="100009792034310"/>

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

        <SocialWrapper>
          <TweetButton url={currentURL} text={post.frontmatter.title}/>
          <FacebookButton url={currentURL}/>
          <HatenaButton path={this.props.location.pathname}/>
        </SocialWrapper>

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
            margin: 0,
          }}
        >
          <li style={{ marginRight: 'auto' }}>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                ← {next.frontmatter.title}
              </Link>
            }
          </li>
          <li style={{ marginLeft: 'auto' }}>
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

const SocialWrapper = styled.div`
  text-align: right;
  margin-top: 64px;
  margin-bottom: 8px;
`

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
