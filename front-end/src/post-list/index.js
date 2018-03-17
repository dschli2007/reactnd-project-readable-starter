import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import PostStub from '../post-stub'

class PostList extends React.Component {
  PropTypes = {
    posts: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired
  }

  render() {
    const { posts, ready } = this.props
    return (
      <div>
        <h2>I am a container</h2>
        {ready && (
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
        {!ready && <p> I am not ready </p>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.items,
    ready: state.post.ready
  }
}

export default connect(mapStateToProps)(PostList)
