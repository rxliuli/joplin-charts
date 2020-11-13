import { RouteConfig } from 'react-router-config'
import TagCloud from '../../pages/tag'
import RelationMap from '../../pages/relation'
import JoplinSetting from '../../pages/setting'
import Home from '../../pages/home'
import CreateNoteDemo from '../../pages/demo'
import NotebookSunburst from '../../pages/sunburst'
import NoteTimeline from '../../pages/timeline/NoteTimeline'

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
    path: '/timeline',
    component: NoteTimeline,
  },

  {
    path: '/',
    component: Home,
  },
]
