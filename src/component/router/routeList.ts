import { RouteConfig } from 'react-router-config'
import TagCloud from '../../pages/tag'
import Hello from '../../pages/hello'
import RelationMap from '../../pages/relation'
import JoplinSetting from '../../pages/setting'
import Home from '../../pages/home'

export const routeList: RouteConfig[] = [
  {
    path: '/setting',
    component: JoplinSetting,
  },
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
  {
    path: '/',
    component: Home,
  },
]
