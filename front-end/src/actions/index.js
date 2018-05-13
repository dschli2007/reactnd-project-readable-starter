import ServerAPI from '../utils/ServerAPI'
export const USER_LOG_IN = 'USER_LOG_IN'
export const USER_LOG_OUT = 'USER_LOG_OUT'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export const SET_FILTER_TEXT = 'SET_FILTER_TEXT'
export const SET_FILTER_SORTBY = 'SET_FILTER_SORTBY'

export const LOAD_POSTS = 'LOAD_POSTS'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const RELOAD_POST = 'RELOAD_POST'
export const START_EDITING_POST = 'START_EDITING_POST'
export const CANCEL_EDITING_POST = 'CANCEL_EDITING_POST'

export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
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

export const loadCommentsForPost = (postId) => (dispatch) =>
  server
    .getComments(postId)
    .then((res) => res.json())
    .then((items) =>
      dispatch({
        type: LOAD_COMMENTS,
        items,
        postId: postId
      })
    )

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

export function editPost({ post }) {
  return {
    type: EDIT_POST,
    post
  }
}

export const deletePost = ({ id }) => (dispatch) => {
  return server.deletePost(id).then(() =>
    dispatch({
      type: DELETE_POST,
      id
    })
  )
}

export function startEditingPost(post) {
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

export const requireReloadPost = ({ postId }) => (dispatch) => {
  return server
    .getPost(postId)
    .then((res) => res.json())
    .then((resPost) => dispatch(reloadPost(resPost)))
}

export const savePostEditing = (post) => (dispatch) => {
  let methodCall
  if (!post.id) {
    post.id = 'post' + new Date().getTime()
    methodCall = server.addPost(post)
  } else {
    methodCall = server.updatePost(post)
  }
  return methodCall.then((res) => res.json()).then((resPost) => dispatch(reloadPost(resPost)))
}

export function cancelPostEditing() {
  return {
    type: CANCEL_EDITING_POST
  }
}

export const votePostUp = ({ id }) => (dispatch) => {
  return server
    .votePost(id, 'upVote')
    .then((res) => res.json())
    .then((post) => dispatch(reloadPost(post)))
}

export const votePostDown = ({ id }) => (dispatch) => {
  return server
    .votePost(id, 'downVote')
    .then((res) => res.json())
    .then((post) => dispatch(reloadPost(post)))
}

export const addComment = ({ id, postId, body, author }) => (dispatch) => {
  const data = { id, parentId: postId, body, author }
  return server
    .addComment(data)
    .then((res) => res.json())
    .then((comment) =>
      dispatch({
        type: ADD_COMMENT,
        comment
      })
    )
}

export const updateComment = ({ comment }) => (dispatch) => {
  return server
    .updateComment(comment)
    .then((res) => res.json())
    .then((resComment) =>
      dispatch({
        type: UPDATE_COMMENT,
        comment: resComment
      })
    )
}

export const deleteComment = ({ id }) => (dispatch) => {
  return server.deleteComment(id)
  .then(() =>
    dispatch({
      type: DELETE_COMMENT,
      id
    })
  )
}

export const voteComment = ({ id, option }) => (dispatch) => {
  return server.voteComment(id, option)
  .then((res) => res.json())
  .then((resComment) =>
    dispatch({
      type: UPDATE_COMMENT,
      comment: resComment
    }))}
