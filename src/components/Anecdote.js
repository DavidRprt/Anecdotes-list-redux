import  { vote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { getMessage } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Anecdote = props => {
    const dispatch = useDispatch()

    const handleVote = event => {
      dispatch(vote(props.anecdote))
      dispatch(getMessage(`You voted ${props.anecdote.content}`))
    }

    const LinkStyle = {
      color: "#2196F3",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      "&:hover": {
        color: "#1E88E5",
        transform: "translateY(-2px)"
      }
    }

    return (
        <div>
            <div>
            <Link  style={LinkStyle} to={`/anecdotes/${props.anecdote.id}`}>{props.anecdote.content}</Link>
            </div>
            <div>
              has {props.anecdote.votes} votes
              <Button variant="secondary" onClick={() => handleVote()}>Vote</Button>
            </div>
        </div>
  
    )
}

export default Anecdote