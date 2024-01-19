import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Global from './assets/style/global.ts'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global/>
      <App />
    </Provider>
  </React.StrictMode>,
)
