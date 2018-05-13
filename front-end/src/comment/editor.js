import React from 'react'
import { connect } from 'react-redux'
import { updateComment } from '../actions'

class CommentEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { commentText: props.comment.body }
  }

  onCommentChange(text) {
    this.setState({ commentText: text })
  }

  saveComment() {
    const data = { ...this.props.comment, body: this.state.commentText }
    this.props.updateComment(data)
    this.props.onEndEdit()
  }

  render() {

    return (
      <div>
        <hr />
        <div>Edit your comment:</div>
        <div>
          <textarea
            rows="10"
            cols="80"
            value={this.state.commentText}
            onChange={(e) => this.onCommentChange(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="button green" onClick={() => this.saveComment()}>Save</button>
          <button className="button black" onClick={() => this.props.onEndEdit()}>Cancel</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    updateComment: (comment) => dispatch(updateComment({ comment }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEditor)
