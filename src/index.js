import React from 'react'
import { render } from 'react-dom'
import {  Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'


//layout. There are all pages
import App from "./mainLayout/App";

// Redux
import { authReducers } from "./reducers"

const history = createHistory()

const allReducers = {
  routerReducer,
  authReducers,
}

const store = createStore(
  combineReducers(allReducers),
  applyMiddleware(routerMiddleware(history)),
)

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
