import React from 'react'

class PostView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {post} = this.props
    console.log(post)
    return(

<article>
  <header>
    <h2>{post.title}</h2>
  </header>
  <main>
    {post.body}
  </main>
  <footer>
    <p>Writed by {post.author} in {new Date(post.timestamp).toString()}</p>
  </footer>
</article>



)
  }
}

export default PostView
