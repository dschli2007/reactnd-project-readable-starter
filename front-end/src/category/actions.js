export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function loadCategories({ items }) {
  return {
    type: LOAD_CATEGORIES,
    items
  }
}
