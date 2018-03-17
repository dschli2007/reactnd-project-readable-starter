import { LOAD_POSTS, ADD_POST, EDIT_POST, REMOVE_POST } from './actions'

const initialState = {
  items: [],
  loaded: false
}

function post(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        items: action.items,
        loaded: true
      }

    case ADD_POST:
      return {
        ...state,
        items: [...state.items, action.post]
      }

    case EDIT_POST:
      const posts = state.items.filter((item) => item.id !== action.post.id)
      posts.push(action.post)
      return { items: posts }

    case REMOVE_POST:
      return {
        ...state,
        items: state.items.filter((f) => f.id !== action.id)
      }

    default:
      return state
  }
}

export default post
