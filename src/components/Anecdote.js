import  { vote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { getMessage } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'

const Anecdote = props => {
    const dispatch = useDispatch()

    const handleVote = event => {
      dispatch(vote(props.anecdote))
      dispatch(getMessage(`You voted ${props.anecdote.content}`))
    }

    return (
        <div>
            <div>
            <Link to={`/anecdotes/${props.anecdote.id}`}>{props.anecdote.content}</Link>
            </div>
            <div>
              has {props.anecdote.votes} votes
            <button onClick={() => handleVote()}>vote</button>
            </div>
        </div>
  
    )
}

export default Anecdote