import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        votes: 0,
        id: getId(),
      })
      state.sort((a, b) => b.votes - a.votes)
    },
    addVote(state, action) {
      const anecdote = action.payload
      const id = action.payload.id
      const filterState = state.filter(as => as.id !== id)
      const newAnecdote =  { ...anecdote, 'votes': anecdote.votes + 1 }
      const newState = [...filterState, newAnecdote]
      return newState.sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer