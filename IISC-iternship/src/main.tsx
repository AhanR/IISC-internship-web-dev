import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import mode from './reducers/mode'
import destination from './reducers/destination'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    mode: mode,
    destination: destination
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
