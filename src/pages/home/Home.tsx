import * as React from 'react'
import { List, ListItem } from '@material-ui/core'
import { useHistory } from 'react-router'

type PropsType = {}
/**
 * 首页
 */
const Home: React.FC<PropsType> = () => {
  const history = useHistory()
  return (
    <List component="nav">
      <ListItem button={true} onClick={() => history.push('/setting')}>
        设置 Joplin Token/Port
      </ListItem>
      <ListItem button={true} onClick={() => history.push('/relation')}>
        关系图
      </ListItem>
      <ListItem button={true} onClick={() => history.push('/tag')}>
        词云
      </ListItem>
    </List>
  )
}

export default Home
