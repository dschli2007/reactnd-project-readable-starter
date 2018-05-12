import { USER_LOG_IN, USER_LOG_OUT } from '../actions'

const initialState = {
  name: '',
  isLogged: false
}

function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOG_IN:
      return {
        ...state,
        name: action.userName,
        isLogged: true
      }

    case USER_LOG_OUT:
      return {
        ...state,
        name: '',
        isLogged: false
      }

    default:
      return state
  }
}

export default user
