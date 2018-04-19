import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class PostStub extends React.Component {
  PropTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <Link to={`${post.category}/${post.id}`}>
          <h2>
            {post.title} - {post.category}
          </h2>
          <p>{post.author}</p>
          <p>Comments: {post.commentCount}</p>
          <p>Score: {post.voteScore}</p>
        </Link>
        <button>Up Vote</button>
        <button>Down Vote</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default PostStub
