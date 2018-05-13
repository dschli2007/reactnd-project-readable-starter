import React from 'react'
import CommentCommands from './commands'
import CommentEditor from './editor'

class CommentView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }
  }

  onEdit(editing) {
    this.setState({ editing: editing })
  }

  render() {
    const { post, comment } = this.props

    return (
      <div>
        <hr />

        {!this.state.editing && (
          <div>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>score:{comment.voteScore}</p>

            <CommentCommands post={post} comment={comment} onEdit={() => this.onEdit(true)} />
          </div>
        )}
        {this.state.editing && (
          <CommentEditor post={post} comment={comment} onEndEdit={() => this.onEdit(false)} />
        )}
      </div>
    )
  }
}

export default CommentView
