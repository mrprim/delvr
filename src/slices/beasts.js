import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'

const beastsAdapter = createEntityAdapter({})

const beastsSlice = createSlice({
  name: 'beasts',
  initialState: beastsAdapter.getInitialState(),
  reducers: {
    add: beastsAdapter.addOne,
    remove: beastsAdapter.removeOne
  }
})

export const { selectAll } = beastsAdapter.getSelectors(s => s.beasts)

export const { add, remove } = beastsSlice.actions

export default beastsSlice.reducer
