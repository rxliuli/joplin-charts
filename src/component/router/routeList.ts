import { RouteConfig } from 'react-router-config'
import TagCloud from '../../pages/tag'
import Hello from '../../pages/hello'

export const routeList: RouteConfig[] = [
  {
    path: '/tag',
    component: TagCloud,
  },
  {
    path: '/hello',
    component: Hello,
  },
]
