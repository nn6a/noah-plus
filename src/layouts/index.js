import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.6),
            fontFamily: 'Georgia, serif',
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            noah.plus
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            ...scale(0.3),
            fontFamily: 'Georgia, serif',
            marginTop: 0,
            marginBottom: rhythm(1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            noah.plus
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          paddingBottom: rhythm(0.5)
        }}
      >
        {header}
        {children()}

        <p
          style={{
            fontFamily: 'Georgia, serif',
            marginTop: rhythm(4),
            marginBottom: 0,
            textAlign: 'center',
            fontWeight: 600,
            opacity: 0.4
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            noah.plus
          </Link>
        </p>
      </div>
    )
  }
}

export default Template
