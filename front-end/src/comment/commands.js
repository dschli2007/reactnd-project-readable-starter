import React from 'react'
import { connect } from 'react-redux'
import { deleteComment, voteComment, requireReloadPost } from '../actions'

class CommentCommands extends React.Component {
  deleteClick() {
    this.props.deleteComment(this.props.comment.id)
    this.props.requireReloadPost(this.props.post.id)
  }

  render() {
    const { user, comment } = this.props
    const itIsMyPost = user.name === comment.author
    return (
      <div>
        <button className="button green" onClick={() => this.props.voteComment(this.props.comment.id, 'upVote')}>Up vote</button>
        <button className="button yellow" onClick={() => this.props.voteComment(this.props.comment.id, 'downVote')}>Down vote</button>
        {itIsMyPost && (
          <span>
            <button className="button blue" onClick={() => this.props.onEdit()}>Edit</button>
            <button className="button red" onClick={() => this.deleteClick()}>Delete</button>
          </span>
        )}
      </div>
    )
  }
}

function mapStateToProps({ user }) {
  return { user }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: (id) => dispatch(deleteComment({ id })),
    voteComment: (id, option) => dispatch(voteComment({ id, option })),
    /*  votePostUp: (id) => dispatch(votePostUp({ id })),
    votePostDown: (id) => dispatch(votePostDown({ id })),
    startEditingPost: (post) => dispatch(startEditingPost(post)),
    deletePost: (id) => dispatch(deletePost({ id }))
  */
    requireReloadPost: (postId) => dispatch(requireReloadPost({ postId }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCommands)
