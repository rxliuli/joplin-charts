import { RouteConfig } from 'react-router-config'
import TagCloud from '../../pages/tag'
import Hello from '../../pages/hello'
import RelationMap from '../../pages/relation'

export const routeList: RouteConfig[] = [
  {
    path: '/tag',
    component: TagCloud,
  },
  {
    path: '/hello',
    component: Hello,
  },
  {
    path: '/relation',
    component: RelationMap,
  },
]
