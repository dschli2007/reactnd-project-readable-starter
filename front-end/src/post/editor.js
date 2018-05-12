import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import PostCommands from './commands'
import { loadComments } from '../actions'

class PostEditor extends React.Component {
  constructor(props) {
    super(props)
    this.initialState = { post: null }
    this.state = this.initialState
  }

  componentWillMount() {
    const { post } = this.props
    if (post && this.state.post.id !== post.id) this.setState({ post: { ...this.props.post } })
  }

  inputChanged(prop, value) {
    this.setState({ userInput: value })
  }

  render() {
    const { post } = this.props
    if (!post) return <span />

    return (
      <Modal isOpen={true} contentLabel="Post editing" ariaHideApp={false}>
        <form>
          <div>
            Title:{' '}
            <input
              className="field-input"
              type="text"
              name="title"
              value={this.state.post.title}
              onChange={(e) => this.inputChanged('title', e.target.value)}
            />
          </div>
          <button
            className="login-confirm-button"
            onClick={(e) => this.loginClick(e)}
            disabled={!this.state.userInput}>
            Enter
          </button>
          <button className="login-cancel-button" onClick={(e) => this.cancelClick(e)}>
            Cancel
          </button>
        </form>
        <article>
          <header>
            <h2>{post.title}</h2>
          </header>
          <main>
            {post.body}
            Comments: {post.commentCount}
            Score: {post.voteScore}
          </main>
          <footer>
            <p>
              Writed by {post.author} in {new Date(post.timestamp).toString()}
            </p>
          </footer>
        </article>
      </Modal>
    )
  }
}

function mapStateToProps({ user, post }) {
  return { user, post: post.postInEditing }
}

function mapDispatchToProps(dispatch) {
  return {
    //  loadComments: (post) => dispatch(loadComments(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor)
