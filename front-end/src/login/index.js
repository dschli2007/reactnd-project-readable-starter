import React from 'react'
import { connect } from 'react-redux'
import { userLogIn, userLogOut } from './actions'
import LoginModal from '../login-modal'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.initialState = { showModalLogin: false }
    this.state = this.initialState
  }

  loginClick(data) {
    this.props.login({ userName: data.userName })
    this.setState(this.initialState)
  }

  cancelClick() {
    this.setState(this.initialState)
  }

  logoutClick() {
    this.props.logout()
  }

  setModalState(modalState) {
    this.setState({ showModalLogin: modalState })
  }

  render() {
    const { userName } = this.props
    if (userName) {
      return (
        <div className="login-container">
          Welcome {userName},{' '}
          <button className="login-button" onClick={() => this.logoutClick()}>
            Logout
          </button>
        </div>
      )
    }

    return (
      <div className="login-container">
        Please{' '}
        <button className="login-button" onClick={() => this.setModalState(true)}>
          login
        </button>
        <LoginModal isOpen={this.state.showModalLogin}
          onLogin={(data) => this.loginClick(data)}
          onCancel={()=> this.cancelClick()}
         />
      </div>
    )
  }
}

function mapStateToProps({ login }) {
  return { userName: login.userName }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (userName) => dispatch(userLogIn(userName)),
    logout: () => dispatch(userLogOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
