import { useDispatch } from 'react-redux'
import  { appendAnecdote } from '../reducers/anecdoteReducer'
import { getMessage } from '../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'

const AddForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const anecdote = useField('text')

    const handleForm = async (event) => {
        event.preventDefault()
        dispatch(appendAnecdote(anecdote.value))
        dispatch(getMessage(`You added ${anecdote.value}`))
        navigate('/')
    }
    return(
        <div>
          <h2>create new</h2>
          <form onSubmit={handleForm}>
            <div>anecdote: <input type={anecdote.type} value={anecdote.value} onChange={anecdote.onChange}/></div>
            <button type="submit">create</button>
          </form>
        </div>
    )
}

export default AddForm