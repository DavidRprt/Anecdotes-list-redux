import  { vote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { getMessage } from '../reducers/notificationReducer'

const Anecdote = props => {
    const dispatch = useDispatch()

    const handleVote = event => {
      dispatch(vote(props.anecdote))
      dispatch(getMessage(`You voted ${props.anecdote.content}`))
    }

    return (
        <div>
            <div>
              {props.anecdote.content}
            </div>
            <div>
              has {props.anecdote.votes}
            <button onClick={() => handleVote()}>vote</button>
            </div>
        </div>
  
    )
}

export default Anecdote