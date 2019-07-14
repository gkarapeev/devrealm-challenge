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
import albumReducer from './reducers/album-reducer'

const store = createStore(
  albumReducer,
  {albums: []},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
