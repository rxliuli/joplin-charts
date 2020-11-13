import * as React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  List,
  ListItem,
} from '@material-ui/core'
import i18next, { InitOptions } from 'i18next'
import css from './Home.module.css'
import { useAsync } from 'react-use'
import { Link } from 'react-router-dom'

type PropsType = {}

type LocaleKeys =
  | 'settingRouteName'
  | 'relationRouteName'
  | 'tagRouteName'
  | 'sunburstRouteName'
  | 'timelineName'
  | 'chartList'

const i18nOptions: InitOptions = {
  lng: navigator.language,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        settingRouteName: 'Set up Joplin Token/Port',
        relationRouteName: 'Relation chart',
        tagRouteName: 'Tag Cloud',
        sunburstRouteName: 'Note directory size analysis chart',
        timelineName: 'timeline',
        chartList: 'Chart list',
      } as Record<LocaleKeys, string>,
    },
    'zh-CN': {
      translation: {
        settingRouteName: '设置 Joplin Token/Port',
        relationRouteName: '关系图',
        tagRouteName: '标签云',
        sunburstRouteName: '笔记目录大小分析图',
        timelineName: '时间线',
        chartList: '图表列表',
      } as Record<LocaleKeys, string>,
    },
  },
}

const configList: { label: LocaleKeys; to: string }[] = [
  { label: 'settingRouteName', to: '/setting' },
  { label: 'tagRouteName', to: '/tag' },
  { label: 'relationRouteName', to: '/relation' },
  { label: 'sunburstRouteName', to: '/sunburst' },
  { label: 'timelineName', to: '/timeline' },
]

/**
 * 首页
 */
const Home: React.FC<PropsType> = () => {
  const i18nLoad = useAsync(() => i18next.init(i18nOptions), [])
  return (
    <>
      {i18nLoad.value && (
        <Container maxWidth="sm" className={css.root}>
          {
            <Card>
              <CardHeader title={i18next.t<string, LocaleKeys>('chartList')} />
              <CardContent>
                <List component="nav">
                  {configList.map((config) => (
                    <ListItem>
                      <Link to={config.to}>
                        {i18next.t<string, LocaleKeys>(config.label)}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          }
        </Container>
      )}
    </>
  )
}

export default Home
