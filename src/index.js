// 1. React
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 2. Components
import App from './components/App/App'

// 3. Packages
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


function reducer(state = [], action) {
  return state
}

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
