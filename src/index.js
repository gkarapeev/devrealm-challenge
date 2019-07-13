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
  {
    albums: [
      {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim",
        photos: [
          {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
          },
          {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
          },
          {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
          }
        ]
      },
      {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa",
        photos: [
          {
            "albumId": 2,
            "id": 51,
            "title": "non sunt voluptatem placeat consequuntur rem incidunt",
            "url": "https://via.placeholder.com/600/8e973b",
            "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
          },
          {
            "albumId": 2,
            "id": 52,
            "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
            "url": "https://via.placeholder.com/600/121fa4",
            "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
          },
          {
            "albumId": 2,
            "id": 53,
            "title": "soluta et harum aliquid officiis ab omnis consequatur",
            "url": "https://via.placeholder.com/600/6efc5f",
            "thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
          }
        ]
      },
      {
        "userId": 1,
        "id": 3,
        "title": "omnis laborum odio",
        photos: [
          {
            "albumId": 3,
            "id": 101,
            "title": "incidunt alias vel enim",
            "url": "https://via.placeholder.com/600/e743b",
            "thumbnailUrl": "https://via.placeholder.com/150/e743b"
          },
          {
            "albumId": 3,
            "id": 102,
            "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
            "url": "https://via.placeholder.com/600/a393af",
            "thumbnailUrl": "https://via.placeholder.com/150/a393af"
          },
          {
            "albumId": 3,
            "id": 103,
            "title": "et eius nisi in ut reprehenderit labore eum",
            "url": "https://via.placeholder.com/600/35cedf",
            "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
          }
        ]
      }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
