import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Login from './login'
import PostList from './post-list'
import PostSelector from './post-selector'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable</h1>
          <Login />
        </header>

        <Route exact path="/" component={PostList} />
        <Route path="/view/:id" component={PostSelector} />
      </div>
    )
  }
}



export default App
