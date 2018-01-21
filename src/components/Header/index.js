import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
    <ul>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline`}}>Gatsby Team</h1>
      </Link>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <p style={{ display: `inline`}}>Tickets</p>
      </Link>
    </ul>
    </div>
  </div>
)

export default Header
