import { RouteConfig } from 'react-router-config'
import TagCloud from '../../pages/tag'
import RelationMap from '../../pages/relation'
import JoplinSetting from '../../pages/setting'
import Home from '../../pages/home'
import CreateNoteDemo from '../../pages/demo'
import NotebookSunburst from '../../pages/sunburst'

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
    path: '/sunburst',
    component: NotebookSunburst,
  },
  {
    path: '/relation',
    component: RelationMap,
  },
  {
    path: '/demo/create-note',
    component: CreateNoteDemo,
  },
  {
    path: '/',
    component: Home,
  },
]
