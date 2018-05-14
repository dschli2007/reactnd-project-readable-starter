import React from 'react'
import { connect } from 'react-redux'

import PostCommands from './commands'
import CommentList from '../comment/list'
import Breadcrumb from '../breadcrumb'
import { DateFormat } from '../utils/dateformat'

class PostView extends React.Component {
  render() {
    const { post } = this.props
    const scoreColor = post.voteScore === 0 ? '' : post.voteScore > 0 ? 'blue' : 'red'
    let i = 0
    return (
      <div>
        <Breadcrumb post={post} />

        <article>
          <header>
            <h2>{post.title}</h2>
          </header>
          <main>
            <p>
              {post.body.split('\n').map((item) => (
                <span key={i + 1}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
            <div className="post-list-author">
              Writed by {post.author} in {DateFormat.day(post.timestamp)}
            </div>
            <div className="post-list-comments">Comments: {post.commentCount}</div>
            <div className="post-list-score">
              Score: <span className={scoreColor}>&nbsp;{post.voteScore}&nbsp; </span>
            </div>

            <PostCommands post={post} />
            <CommentList post={post} />
          </main>
          <footer />
        </article>
      </div>
    )
  }
}

function mapStateToProps({ comment, user, post }) {
  return { comment, user }
}

export default connect(mapStateToProps)(PostView)
