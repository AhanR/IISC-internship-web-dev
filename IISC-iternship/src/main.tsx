// this module is used for basic housekeeping of data

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import mode from './reducers/mode'
import destination from './reducers/destination'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// configuring the redux store with 2 important stores, mode and destination
// including their reducers as well
const store = configureStore({
  reducer: {
    mode: mode,
    destination: destination
  }
})

// adding in the store to all the props in the tree below
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
