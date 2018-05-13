import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Login from './login'
import PostList from './post/list'
import PostSelector from './post/selector'
import PostEditor from './post/editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/" className="link-title">
            <div className="App-title">Readable</div>
          </Link>
          <Login />
        </header>
        <div className="page-content">
          <PostEditor />
          <Route exact path="/" component={PostList} />
          <Route exact path="/:category" component={PostList} />
          <Route path="/:category/:id" component={PostSelector} />
        </div>
      </div>
    )
  }
}

export default App
