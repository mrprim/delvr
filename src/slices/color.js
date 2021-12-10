import { createSlice } from '@reduxjs/toolkit'

const initialState = 'red'

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    set: (state, action) => action.payload
  }
})

export const { set } = colorSlice.actions

export default colorSlice.reducer
