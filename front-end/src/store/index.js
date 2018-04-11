import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import user from '../reducers/user'
import post from '../reducers/post'
import comment from '../reducers/comment'
import category from '../reducers/category'
import filter from '../reducers/filter'

function reducers() {
  return combineReducers({
    user,
    post,
    comment,
    category,
    filter
  })
}

function getStore() {
  return createStore(
    reducers(),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  )
}

export default getStore
