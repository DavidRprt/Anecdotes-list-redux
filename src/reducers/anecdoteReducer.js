import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotesService'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdoteObject = action.payload
      state.push(anecdoteObject)
      state.sort((a, b) => b.votes - a.votes)
    },
    addVote(state, action) {
      const newAnecdote = action.payload
      const id = action.payload.id
      const filterState = state.filter(as => as.id !== id)
      const newState = [...filterState, newAnecdote]
      return newState.sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state, action) {
      const allAnecdotes = action.payload
      return allAnecdotes.sort((a, b) => b.votes - a.votes)
    }
  }
})

export const { createAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const all = await anecdoteService.getAll()
    dispatch(setAnecdotes(all))
  }
}

export const appendAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.appendAnecdote(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    const data = await anecdoteService.addVote(anecdote)
    dispatch(addVote(data))

  }
}
 
export default anecdoteSlice.reducer