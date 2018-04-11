export const LOAD_POSTS = 'LOAD_POSTS'

export function loadPosts({ items }) {
  return {
    type: LOAD_POSTS,
    items
  }
}
