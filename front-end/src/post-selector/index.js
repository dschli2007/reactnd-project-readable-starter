import React from 'react'
import { connect } from 'react-redux'
import Post from '../post'

function PostSelector(props) {
  const postId = props.match.params.id
  const post = props.posts.find((p) => p.id === postId)
  if (post) {
    return <Post post={post} />
  }
  return <p>Sorry! It seems the post you are looking for has been deleted!</p>
}

function mapStateToProps(state) {
  return { posts: state.post.items }
}

export default connect(mapStateToProps)(PostSelector)
