// main pages
import Home from '../components/pages/Home'
import PostPage from '../components/pages/PostPage'
import Preview from '../components/pages/Preview'
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
