import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
      getMessage(state, action) {
      return action.payload
    }
  }
})

export const { getMessage } = notificationSlice.actions
export default notificationSlice.reducer