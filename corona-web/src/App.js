import React from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}
