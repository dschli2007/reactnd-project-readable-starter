import React from 'react'
import CommentCommands from './commands'
import CommentEditor from './editor'
import { DateFormat } from '../utils/dateformat'

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
    const scoreColor = comment.voteScore === 0 ? '' : comment.voteScore > 0 ? 'blue' : 'red'
    let i = 0
    return (
      <div>
        <hr />

        {!this.state.editing && (
          <div>
            <p>
              {comment.body.split('\n').map((item) => (
                <span key={i + 1}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
            <div className="post-list-author">
              Writed by {comment.author} in {DateFormat.day(comment.timestamp)}
            </div>
            <div className="post-list-score">
              Score: <span className={scoreColor}>&nbsp;{comment.voteScore}&nbsp; </span>
            </div>

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
