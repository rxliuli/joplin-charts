import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import 'normalize.css'
import { IntlProvider } from 'react-intl'
import { SnackbarProvider } from 'notistack'
import { HashRouter } from 'react-router-dom'
import '@antv/graphin/dist/index.css'

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={window.navigator.language}>
      <SnackbarProvider maxSnack={3}>
        <HashRouter>
          <App />
        </HashRouter>
      </SnackbarProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
