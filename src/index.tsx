import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import * as am4core from '@amcharts/amcharts4/core'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import App from './App'
import 'normalize.css'

am4core.useTheme(am4themes_animated)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()