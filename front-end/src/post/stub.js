import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PostCommands from './commands'
import { DateFormat } from '../utils/dateformat'

class PostStub extends React.Component {
  PropTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post } = this.props
    const scoreColor = post.voteScore === 0 ? '' : post.voteScore > 0 ? 'blue' : 'red'
    return (
      <div className="post-list-content">
        <div className="post-list-link-area">
          <Link className="post-list-link" to={`${post.category}/${post.id}`}>
            <div className="post-list-title">
              {post.title}
              <div className="post-list-category">{post.category}</div>
            </div>

            <div className="post-list-author">
              by {post.author} in {DateFormat.day(post.timestamp)}
            </div>

            <div className="post-list-comments">Comments: {post.commentCount}</div>
            <div className="post-list-score">
              Score: <span className={scoreColor}>&nbsp;{post.voteScore}&nbsp; </span>
            </div>
          </Link>
        </div>
        <PostCommands post={post} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.post.items }
}

export default connect(mapStateToProps)(PostStub)
