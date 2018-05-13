import React from 'react'
import { connect } from 'react-redux'
import CommentView from './view'
import { loadCommentsForPost, addComment, requireReloadPost } from '../actions'

class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { commentText: '' }
  }

  componentDidMount() {
    if (this.props.post) this.props.loadCommentsForPost(this.props.post)
  }
  /*
  componentWillReceiveProps(nextProps) {
    if (nextProps.post && nextProps.comment && nextProps.post.id !== nextProps.comment.postId)
      this.props.loadCommentsForPost(this.props.post)
  }
*/
  onCommentChange(text) {
    this.setState({ commentText: text })
  }

  saveComment() {
    const id = 'cmt' + new Date().getTime()
    this.props.addComment(id, this.props.post.id, this.state.commentText, this.props.user.name)
    this.props.requireReloadPost(this.props.post.id)
    this.onCommentChange('')
  }

  render() {
    const { comment, post, user } = this.props

    return (
      <div>
        <div>Comments:</div>
        {comment &&
          comment.postId === post.id &&
          comment.items.map((item) => <CommentView key={item.id} post={post} comment={item} />)}
        <div>
          <hr />
          <div>Add a comment:</div>
          <div>
            <textarea
              rows="10"
              cols="80"
              value={this.state.commentText}
              onChange={(e) => this.onCommentChange(e.target.value)}
            />
          </div>
          <div>
            <button className="button green"
              disabled={!this.state.commentText || !user.isLogged}
              onClick={() => this.saveComment()}>
              Save comment
            </button>
            {!user.isLogged && <span>(Log in first)</span>}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ comment, user }) {
  return { comment, user }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCommentsForPost: (post) => dispatch(loadCommentsForPost(post.id)),
    addComment: (id, postId, body, author) => dispatch(addComment({ id, postId, body, author })),
    requireReloadPost: (postId) => dispatch(requireReloadPost({ postId }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
