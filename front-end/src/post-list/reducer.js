import { LOAD_POSTS } from './actions'

const initialState = {
  items: [],
  ready: false
}

function post(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        items: action.items,
        ready: true
      }

    default:
      return state
  }
}

export default post
