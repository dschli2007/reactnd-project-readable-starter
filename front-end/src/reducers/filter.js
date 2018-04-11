import { SET_FILTER_TEXT, SET_FILTER_CATEGORY } from '../filter/actions'

const initialState = {
  text: '',
  category: 'All'
}

function filter(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return {
        ...state,
        text: action.text
      }

    case SET_FILTER_CATEGORY:
      return {
        ...state,
        category: action.category
      }

    default:
      return state
  }
}

export default filter
