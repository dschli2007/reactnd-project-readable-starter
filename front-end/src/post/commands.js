import React from 'react'
import { connect } from 'react-redux'
import { votePostUp, votePostDown, startEditingPost, deletePost } from '../actions'

class PostCommands extends React.Component {
  render() {
    const { post, user } = this.props
    const itIsMyPost = user.name === post.author
    return (
      <div className="button-group">
        <button className="button green" onClick={() => this.props.votePostUp(this.props.post.id)}>Up vote</button>
        <button className="button yellow"onClick={() => this.props.votePostDown(this.props.post.id)}>Down vote</button>
        {itIsMyPost && (
          <span>
            <button className="button blue" onClick={() => this.props.startEditingPost(this.props.post)}>Edit</button>
            <button className="button red"onClick={() => this.props.deletePost(this.props.post.id)}>Delete</button>
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
    votePostUp: (id) => dispatch(votePostUp({ id })),
    votePostDown: (id) => dispatch(votePostDown({ id })),
    startEditingPost: (post) => dispatch(startEditingPost(post)),
    deletePost: (id) => dispatch(deletePost({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommands)
