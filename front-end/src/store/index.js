import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import login from '../login/reducer'
import post from '../post/reducer'

function reducers() {
  return combineReducers({
    login,
    post
  })
}

function getStore() {
  return createStore(
    reducers(),
    compose(
    applyMiddleware(thunk),
       window.__REDUX_DEVTOOLS_EXTENSION__?
        window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f)
  )
}

export default getStore
