import ServerAPI from '../utils/ServerAPI'
export const USER_LOG_IN = 'USER_LOG_IN'
export const USER_LOG_OUT = 'USER_LOG_OUT'
export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
export const SET_FILTER_SORTBY = 'SET_FILTER_SORTBY'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const RELOAD_POST = 'RELOAD_POST'
export const START_EDITING_POST = 'START_EDITING_POST'


export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

const server = new ServerAPI()

export function userLogIn({ userName }) {
  return {
    type: USER_LOG_IN,
    userName
  }
}

export function userLogOut() {
  return {
    type: USER_LOG_OUT
  }
}

export function loadCategories({ items }) {
  return {
    type: LOAD_CATEGORIES,
    items
  }
}

export const loadComments = (items) => ({
  type: LOAD_COMMENTS,
  items
})

export function setFilterText({ text }) {
  return {
    type: SET_FILTER_TEXT,
    text
  }
}

export function setSortBy({ sortBy }) {
  return {
    type: SET_FILTER_SORTBY,
    sortBy
  }
}

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

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}

export function startEditingPost({post}) {
  return {
    type: START_EDITING_POST,
    post: post
  }
}


export function reloadPost(post) {
  return {
    type: RELOAD_POST,
    post: post
  }
}

export const votePostUp = ({ id }) => (dispatch) => {
  const that = id
  return server
    .votePost(id, 'upVote')
    .then((res) => res.json())
    .then((post) => dispatch(reloadPost(post)))
}

export const votePostDown = ({ id }) => (dispatch) => {
  const that = id
  return server
    .votePost(id, 'downVote')
    .then((res) => res.json())
    .then((post) => dispatch(reloadPost(post)))
}

export function addComment({ id, postId, body, author }) {
  return {
    type: ADD_COMMENT,
    id,
    postId,
    body,
    author
  }
}

export function editComment({ id, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    body
  }
}

export function removeComment({ id }) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

export function voteComment({ id, value }) {
  return {
    type: VOTE_COMMENT,
    id,
    value
  }
}
