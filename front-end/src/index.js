import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import getStore from './store'
import ServerAPI from './utils/ServerAPI'
import { loadPosts } from './post/actions'

const store = getStore()

const server = new ServerAPI()
server
  .getPosts()
  .then((res) => res.json())
  .then((data) => store.dispatch(loadPosts({ items: data })))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
