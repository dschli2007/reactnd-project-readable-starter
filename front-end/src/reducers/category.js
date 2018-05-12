import { LOAD_CATEGORIES } from '../actions'

const initialState = {
  items: [],
  isReady: false
}

function category(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        items: action.items,
        isReady: true
      }

    default:
      return state
  }
}

export default category
