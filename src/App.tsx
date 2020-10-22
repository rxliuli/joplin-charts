import * as React from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routeList } from './component/router/routeList'
import { SnackbarProvider } from 'notistack'
import { IntlProvider } from 'react-intl'

type PropsType = {}

const App: React.FC<PropsType> = () => {
  return <React.StrictMode>
    <IntlProvider locale={window.navigator.language}>
      <SnackbarProvider maxSnack={3}>
        <HashRouter>
          {renderRoutes(routeList)}
        </HashRouter>
      </SnackbarProvider>
    </IntlProvider>
  </React.StrictMode>
}

export default App
