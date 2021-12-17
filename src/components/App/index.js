import { hot } from 'react-hot-loader'
import React from 'react'
import store from '../../store'
import { Provider } from 'react-redux'
import Layout from '../Layout'

const App = () =>
  <Provider store={store}>
    <Layout />
  </Provider>

export default hot(module)(App)
