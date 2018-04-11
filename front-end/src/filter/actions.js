export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
export const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY'

export function setFilterText({ text }) {
  return {
    type: SET_FILTER_TEXT,
    text
  }
}

export function setFilterCategory({ category }) {
  return {
    type: SET_FILTER_CATEGORY,
    category
  }
}
