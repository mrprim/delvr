import { hot } from 'react-hot-loader'
import React from 'react'
import store from '../../store'
import { Provider } from 'react-redux'
import Box from '../Box'

const message = 'Welcome to delvr'

const App = () =>
  <Provider store={store}>
    <div className='App'>
      <h1>{message}</h1>
      <Box />
    </div>
  </Provider>

export default hot(module)(App)
