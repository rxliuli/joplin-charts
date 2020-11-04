import * as React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  List,
  ListItem,
} from '@material-ui/core'
import { useHistory } from 'react-router'
import i18next, { InitOptions } from 'i18next'
import css from './Home.module.css'
import { useAsync } from 'react-use'

type PropsType = {}

type LocaleKeys =
  | 'settingRouteName'
  | 'relationRouteName'
  | 'tagRouteName'
  | 'sunburstRouteName'
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
        chartList: 'Chart list',
      } as Record<LocaleKeys, string>,
    },
    'zh-CN': {
      translation: {
        settingRouteName: '设置 Joplin Token/Port',
        relationRouteName: '关系图',
        tagRouteName: '标签云',
        sunburstRouteName: '笔记目录大小分析图',
        chartList: '图表列表',
      } as Record<LocaleKeys, string>,
    },
  },
}

/**
 * 首页
 */
const Home: React.FC<PropsType> = () => {
  const i18nLoad = useAsync(() => i18next.init(i18nOptions), [])
  const history = useHistory()
  return (
    <>
      {i18nLoad.value && (
        <Container maxWidth="sm" className={css.root}>
          {
            <Card>
              <CardHeader title={i18next.t<string, LocaleKeys>('chartList')} />
              <CardContent>
                <List component="nav">
                  <ListItem
                    button={true}
                    onClick={() => history.push('/setting')}
                  >
                    {i18next.t<string, LocaleKeys>('settingRouteName')}
                  </ListItem>
                  <ListItem button={true} onClick={() => history.push('/tag')}>
                    {i18next.t<string, LocaleKeys>('tagRouteName')}
                  </ListItem>
                  <ListItem
                    button={true}
                    onClick={() => history.push('/relation')}
                  >
                    {i18next.t<string, LocaleKeys>('relationRouteName')}
                  </ListItem>
                  <ListItem
                    button={true}
                    onClick={() => history.push('/sunburst')}
                  >
                    {i18next.t<string, LocaleKeys>('sunburstRouteName')}
                  </ListItem>
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
