import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import { combineReducers } from 'redux'
import filterReducer from './reducers/filterReducer'

const allReducers = combineReducers({
    anecdotes: anecdoteReducer,
    filter: filterReducer
})


const store = configureStore({
  reducer: allReducers
})

export default store