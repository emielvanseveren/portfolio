// main pages
import Home from '../components/pages/Home'
import NotFound from '../components/pages/NotFound'

const routes = [
  {
    path:      '/',
    component: Home,
    exact:     true
  },
  {
    component: NotFound
  }
]

export default routes
