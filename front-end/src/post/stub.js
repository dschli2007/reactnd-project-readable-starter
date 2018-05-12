import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PostCommands from './commands'

class PostStub extends React.Component {
  PropTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const  {post}  = this.props
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
        <PostCommands post={post} />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.post.items }
}

export default connect(mapStateToProps)(PostStub)
