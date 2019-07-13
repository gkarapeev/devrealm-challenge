// 1. React
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 2. Components
import App from './components/App/App'

// 3. Packages
import * as serviceWorker from './serviceWorker'
ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister();
