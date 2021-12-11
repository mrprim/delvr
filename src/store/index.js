import { configureStore } from '@reduxjs/toolkit'
import beasts from '../slices/beasts'
import reduxLogger from 'redux-logger'

const reducer = {
  beasts
}

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reduxLogger)
})

export default store
