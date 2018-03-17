import React from 'react'
import PropTypes from 'prop-types'

class PostStub extends React.Component {
  PropTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    )
  }
}

export default PostStub
