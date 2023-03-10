import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const appendAnecdote = async (content) => {
  const anecdoteObject = { content, votes: 0}
  const response = await axios.post(baseUrl, anecdoteObject)
  return response.data
}

const addVote = async (anecdote) => {
  const object = { ...anecdote, 'votes': anecdote.votes + 1 }
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, object)
  return response.data
}
// eslint-disable-next-line
export default { getAll, appendAnecdote, addVote }