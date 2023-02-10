import  { addVote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const Anecdote = props => {
    const dispatch = useDispatch()
    return (
        <div>
            <div>
              {props.anecdote.content}
            </div>
            <div>
              has {props.anecdote.votes}
            <button onClick={() => dispatch(addVote(props.anecdote))}>vote</button>
            </div>
        </div>
  
    )
}

export default Anecdote