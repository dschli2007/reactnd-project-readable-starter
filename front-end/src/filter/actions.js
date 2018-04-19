export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
export const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY'
export const SET_FILTER_SORTBY = 'SET_FILTER_SORTBY'

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

export function setSortBy({ sortBy }) {
  return {
    type: SET_FILTER_SORTBY,
    sortBy
  }
}
