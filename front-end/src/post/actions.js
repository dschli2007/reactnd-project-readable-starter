export const LOAD_POSTS = 'LOAD_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function loadPosts({ items }) {
  return {
    type: LOAD_POSTS,
    items
  }
}

export function addPost({ post }) {
  return {
    type: ADD_POST,
    post
  }
}

export function editPost({ post }) {
  return {
    type: EDIT_POST,
    post
  }
}

export function removePost({ id }) {
  return {
    type: REMOVE_POST,
    id
  }
}
