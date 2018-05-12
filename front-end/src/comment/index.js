import React from 'react'
import CommentCommands from './commands'

class Comment extends React.Component {
  render() {
    const { comment } = this.props
    console.log(comment)
    return (
      <div>
        <p>{comment.author}</p>
        <p>score:{comment.voteSore}</p>
        <CommentCommands comment={comment} />
      </div>
    )
  }
}

export default Comment
