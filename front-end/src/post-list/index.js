import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import PostStub from '../post-stub'
import Filter from '../filter'

class PostList extends React.Component {
  PropTypes = {
    posts: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired
  }

  render() {
    const { posts, isReady } = this.props
    return (
      <div>
        <Filter />
        {isReady && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={"/view/"+post.id}>
                  <PostStub post={post} />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!isReady && <p> Loading...</p>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.items,
    isReady: state.post.isReady
  }
}

export default connect(mapStateToProps)(PostList)
