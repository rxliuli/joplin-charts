import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routeList } from './component/router/routeList'
import { useLocalStorage, useMount } from 'react-use'
import { SettingForm } from './pages/setting'
import { config } from 'joplin-api'
import { proxyStorage } from './common/util/proxyStorage'

type PropsType = {}

//初始化 storage
const storage = proxyStorage<{ settingForm: SettingForm }>(localStorage)
config.token = storage.settingForm?.token!
config.port = storage.settingForm?.port!

const App: React.FC<PropsType> = () => {
  const [settingForm] = useLocalStorage<SettingForm>('settingForm')
  const history = useHistory()
  useMount(() => {
    if (!settingForm?.token || !settingForm?.port) {
      history.push('/setting')
      return
    }
  })
  return renderRoutes(routeList)
}

export default App
