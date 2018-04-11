export const LOAD_COMMENTS = 'LOAD_COMMENTS'

export function loadComments({ items }) {
  return {
    type: LOAD_COMMENTS,
    items
  }
}
