import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostStub from './stub'
import Breadcrumb from '../breadcrumb'
import Filter from '../filter'
import Sort from '../utils/sort'
import { startEditingPost } from '../actions'

class PostList extends React.Component {
  PropTypes = {
    posts: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
    filter: PropTypes.object.isRequired
  }

  getPosts = () => {
    const { posts, filter } = this.props
    let result = posts.filter((item) => !item.deleted)
    const category = this.props.match.params.category
    if (category) result = result.filter((item) => item.category === category)

    if (filter.category !== 'All')
      result = result.filter((item) => item.category === filter.category)
    if (filter.text)
      result = result.filter((item) => item.title.toLowerCase().includes(filter.text.toLowerCase()))

    result = Sort.sortPosts(result, filter.sortBy)

    return result
  }

  addPostClick() {
    const newPost = {
      title: 'New Post',
      body: '',
      author: this.props.user.name,
      timestamp: Date.now(),
      category: this.props.match.params.category || ''
    }
    this.props.startEditingPost(newPost)
  }
  render() {
    const { isReady, user } = this.props
    const category = this.props.match.params.category || 'All'
    return (
      <div>
        <Breadcrumb category={category} />

        <Filter category={this.props.match.params.category || 'All'} />
        {isReady && (
          <div>
            <ul className="post-list-ul">
              {this.getPosts().map((post) => (
                <li className="post-list-item" key={post.id}>
                  <PostStub post={post} />
                </li>
              ))}
            </ul>
            {user.isLogged && (
              <div className="button-group">
                <button className="button green" onClick={() => this.addPostClick()}>
                  Add New Post
                </button>
              </div>
            )}
          </div>
        )}
        {!isReady && <h1> Loading...</h1>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.items,
    isReady: state.post.isReady,
    filter: state.filter,
    user: state.user,
    version: state.post.version
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startEditingPost: (post) => dispatch(startEditingPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
