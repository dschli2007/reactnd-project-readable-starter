import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

class LoginModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.initialState = { userInput: '' }
    this.state = this.initialState
  }

  loginClick(e) {
    e.preventDefault()
    this.props.onLogin({ userName: this.state.userInput })
    this.setState(this.initialState)
  }

  cancelClick(e) {
    e.preventDefault()
    this.props.onCancel()
    this.setState(this.initialState)
  }

  userInputChange(value) {
    this.setState({ userInput: value })
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen}
        contentLabel="Login information"
        ariaHideApp={false}
        style={{content: {bottom:'auto'}}}
        >
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <div className="field-group">
              <div className="field-label">User name:</div>
              <input
                className="field-input"
                type="text"
                name="name"
                value={this.state.userInput}
                onChange={(e) => this.userInputChange(e.target.value)}
              />
            </div>
            <div className="button-group">
              <button
                className="button green"
                onClick={(e) => this.loginClick(e)}
                disabled={!this.state.userInput}>
                Enter
              </button>
              <button className="button black" onClick={(e) => this.cancelClick(e)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}

export default LoginModal
