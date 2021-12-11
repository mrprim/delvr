import { hot } from 'react-hot-loader'
import React from 'react'
import store from '../../store'
import { Provider } from 'react-redux'
import Beasts from '../Beasts'

const App = () =>
  <Provider store={store}>
    <div>
      <Beasts />
    </div>
  </Provider>

export default hot(module)(App)
