import {
  LOAD_POSTS,
  DELETE_POST,
  START_EDITING_POST,
  CANCEL_EDITING_POST,
  RELOAD_POST
} from '../actions'

const initialState = {
  items: [],
  isReady: false,
  version: 0,
  postInEditing: null
}

function post(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        items: action.items,
        isReady: true,
        version: state.version + 1
      }

    case START_EDITING_POST:
      return {
        ...state,
        postInEditing: action.post,
        version: state.version + 1
      }

    case CANCEL_EDITING_POST:
      return {
        ...state,
        postInEditing: null,
        version: state.version + 1
      }

    /*
    case ADD_POST:
      return {
        ...state,
        items: [...state.items, action.post],
        version: state.version + 1
      }
    /*
    case EDIT_POST:
      const posts = state.items.filter((item) => item.id !== action.post.id)
      posts.push(action.post)
      return { items: posts }
*/
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter((f) => f.id !== action.id),
        version: state.version + 1
      }

    case RELOAD_POST:
      const newPostList = [...state.items]
      let reloaded = false
      for (let i = 0; i < newPostList.length; i++) {
        if (newPostList[i].id === action.post.id) {
          newPostList[i] = action.post
          reloaded = true
        }
      }
      if (!reloaded) newPostList.push(action.post)
      return {
        ...state,
        items: newPostList,
        postInEditing: null /*,
        version: state.version + 1*/
      }

    default:
      return state
  }
}

export default post
