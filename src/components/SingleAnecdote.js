import  { vote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getMessage } from '../reducers/notificationReducer'
import { useParams } from 'react-router-dom'

const Anecdote = () => {
    const dispatch = useDispatch()
    const id = useParams().id
    const anecdotes = useSelector(state => state.anecdotes)
    const singleAnecdote = anecdotes.find(n => n.id === id) 
    const handleVote = event => {
      dispatch(vote(singleAnecdote))
      dispatch(getMessage(`You voted ${singleAnecdote.content}`))
    }

    return (
        <div>
            <div>
              <h2>{singleAnecdote.content}</h2>
            </div>
            <div>
              has {singleAnecdote.votes} votes
            <button onClick={() => handleVote()}>vote</button>
            </div>
        </div>
  
    )
}

export default Anecdote