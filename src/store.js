import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import { combineReducers } from 'redux'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const allReducers = combineReducers({
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    message: notificationReducer
})


const store = configureStore({
  reducer: allReducers
})

export default store