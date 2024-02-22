import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { enableMSW } from './mocks'

enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
