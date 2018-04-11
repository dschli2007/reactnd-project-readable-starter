import { LOAD_COMMENTS} from '../comment/actions'
const initialState = {
  items: [],
  isReady: false
}

function comment(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        items: action.items,
        isReady: true
      }
/*
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
*/
    default:
      return state
  }
}

export default comment
