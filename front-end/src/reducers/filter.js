import { SET_FILTER_TEXT, SET_FILTER_CATEGORY, SET_FILTER_SORTBY } from '../filter/actions'

const initialState = {
  text: '',
  category: 'All',
  sortBy: 'title'
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

    case SET_FILTER_SORTBY:
      return {
        ...state,
        sortBy: action.sortBy
      }
    default:
      return state
  }
}

export default filter
