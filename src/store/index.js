import { configureStore } from '@reduxjs/toolkit'
import color from '../slices/color'
import reduxLogger from 'redux-logger'

const reducer = {
  color
}

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reduxLogger)
})

export default store
