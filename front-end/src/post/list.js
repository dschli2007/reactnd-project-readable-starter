import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostStub from './stub'
import Filter from '../filter'
import Sort from '../utils/sort'

class PostList extends React.Component {
  PropTypes = {
    posts: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
    filter: PropTypes.object.isRequired
  }

  getPosts = () => {
    const { posts, filter } = this.props
    let result = posts
    const category = this.props.match.params.category
    if (category) result = result.filter((item) => item.category === category)

    if (filter.category !== 'All')
      result = result.filter((item) => item.category === filter.category)
    if (filter.text) result = result.filter((item) => item.title.includes(filter.text))
    result = Sort.sortPosts(result, filter.sortBy)

    return result
  }

  render() {
    const { isReady } = this.props
    //console.log(new Date())
    return (
      <div>
        <Filter category={this.props.match.params.category || 'All'} />
        {isReady && (
          <div>
            <ul>
              {this.getPosts().map((post) => (
                <li key={post.id}>
                  <PostStub post={post} />
                </li>
              ))}
            </ul>
            <button>Add post</button>
          </div>
        )}
        {!isReady && <p> Loading...</p>}
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    posts: state.post.items,
    isReady: state.post.isReady,
    filter: state.filter,
    version: state.post.version
  }
}

export default connect(mapStateToProps)(PostList)
