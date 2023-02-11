import { useDispatch } from 'react-redux'
import  { appendAnecdote } from '../reducers/anecdoteReducer'
import { getMessage } from '../reducers/notificationReducer'

const AddForm = () => {
    const dispatch = useDispatch()

    const handleForm = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(appendAnecdote(anecdote))
        dispatch(getMessage(`You added ${anecdote}`))
    }
    return(
        <div>
          <h2>create new</h2>
          <form onSubmit={handleForm}>
            <div>anecdote: <input type="text" name="anecdote"/></div>
            <button type="submit">create</button>
          </form>
        </div>
    )
}

export default AddForm