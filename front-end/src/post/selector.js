import React from 'react'
import { connect } from 'react-redux'
import PostView from './view'

function PostSelector(props) {
  const postId = props.match.params.id
  const post = props.posts.find((p) => p.id === postId)
  if (post) {
    return <PostView post={post} />
  }
  return (
    <div>
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
  )
}

function mapStateToProps(state) {
  return { posts: state.post.items }
}

export default connect(mapStateToProps)(PostSelector)
