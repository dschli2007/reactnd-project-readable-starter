import React from 'react'
import { connect } from 'react-redux'

import PostCommands from './commands'
import Comment from '../comment'
import {loadComments} from '../actions'

class PostView extends React.Component {
  componentDidMount() {
    // load comments
    if (!this.props.comments) this.props.loadComments(this.props.post)
  }

  render() {
    const { post, comments } = this.props
    return (
      <article>
        <header>
          <h2>{post.title}</h2>
        </header>
        <main>
          {post.body}
          Comments: {post.commentCount}
          Score: {post.voteScore}
          <PostCommands post={post} />
          {comments && comments.map((item) => <Comment key={item} comment={item} />)}
        </main>
        <footer>
          <p>
            Writed by {post.author} in {new Date(post.timestamp).toString()}
          </p>
        </footer>
      </article>
    )
  }
}

function mapStateToProps({ comment }) {
  return { comment }
}

function mapDispatchToProps(dispatch) {
  return {
    loadComments: (post) => dispatch(loadComments(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
