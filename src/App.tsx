import * as React from 'react'
import { HashRouter, useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routeList } from './component/router/routeList'
import { SnackbarProvider } from 'notistack'
import { IntlProvider } from 'react-intl'
import { useLocalStorage, useMount } from 'react-use'
import { SettingForm } from './pages/setting'
import { config } from 'joplin-api'

type PropsType = {}

const App: React.FC<PropsType> = () => {
  const [settingForm] = useLocalStorage<SettingForm>('settingForm')
  const history = useHistory()
  useMount(() => {
    if (!settingForm?.token || !settingForm?.port) {
      history.push('/setting')
      return
    }

    config.token = settingForm!.token
    config.port = settingForm!.port
  })
  return (
    <React.StrictMode>
      <IntlProvider locale={window.navigator.language}>
        <SnackbarProvider maxSnack={3}>
          <HashRouter>{renderRoutes(routeList)}</HashRouter>
        </SnackbarProvider>
      </IntlProvider>
    </React.StrictMode>
  )
}

export default App
