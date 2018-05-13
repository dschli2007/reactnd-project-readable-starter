import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PostCommands from './commands'
import CommentList from '../comment/list'
import Breadcrumb from '../breadcrumb'

class PostView extends React.Component {
  render() {
    const { post } = this.props

    return (
      <div>
        <Breadcrumb post={post} />

        <article>
          <header>
            <h2>{post.title}</h2>
          </header>
          <main>
            {post.body}
            Comments: {post.commentCount}
            Score: {post.voteScore}
            <PostCommands post={post} />
            <CommentList post={post} />
          </main>
          <footer>
            <p>
              Writed by {post.author} in {new Date(post.timestamp).toString()}
            </p>
          </footer>
        </article>
      </div>
    )
  }
}

function mapStateToProps({ comment, user, post }) {
  return { comment, user }
}

function mapDispatchToProps(dispatch) {
  return {
    //loadCommentsForPost: (post) => dispatch(loadCommentsForPost(post.id)),
    //addComment: (id, postId, body, author) => dispatch(addComment({ id, postId, body, author }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
