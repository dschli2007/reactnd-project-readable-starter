import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb(props) {
  const { post, category } = props
  const show = post || category !== 'All'
  if (!show) return <span />

  return (
    <div className="breadcrumb-panel">
      <Link to="/">Home</Link>
      <span>{' > '}</span>
      {!post && <Link to={'/' + category}>{category}</Link>}

      {post && (
        <span>
          <Link to={'/' + post.category}>{post.category}</Link>
          <span>{' > '}</span>
          <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
        </span>
      )}
    </div>
  )
}

export default Breadcrumb
