// 1. Components
import Albums from './pages/Albums'
import Favorites from './pages/Favorites'

// 2. Icons
import albums from './img/albums_v1.svg'
import favs from './img/favs_v1.svg'

const routes = [
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
    icon: albums
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    icon: favs
  }
];

export default routes