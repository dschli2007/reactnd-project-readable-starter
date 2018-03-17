import { USER_LOG_IN, USER_LOG_OUT } from './actions'

const initialState = {
  userName: null
}

function login(state = initialState, action) {
  
  switch (action.type) {
    case USER_LOG_IN:
      return {
        ...state,
        userName: action.userName
      }

    case USER_LOG_OUT:
      return {
        ...state,
        userName: null
      }

    default:
      return state
  }
}

export default login
