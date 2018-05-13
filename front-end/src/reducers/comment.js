import { LOAD_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions'
const initialState = {
  items: [],
  postId: ''
}

function comment(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        items: action.items,
        postId: action.postId
      }

    case ADD_COMMENT:
      return {
        ...state,
        items: [...state.items, action.comment]
      }

    case UPDATE_COMMENT:
      const listToUpdate = [...state.items]
      for (var i = 0; i < listToUpdate.length; i++) {
        if (listToUpdate[i].id === action.comment.id) listToUpdate[i] = action.comment
      }
      return {
        ...state,
        items: listToUpdate
      }

    case DELETE_COMMENT:
      const newList = state.items.filter((x) => x.id !== action.id)
      return {
        ...state,
        items: newList
      }

    default:
      return state
  }
}

export default comment
