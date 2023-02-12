import { useDispatch } from 'react-redux'
import  { appendAnecdote } from '../reducers/anecdoteReducer'
import { getMessage } from '../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'
import { Form, Button } from 'react-bootstrap'

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
            <Form.Group>
              <Form.Label>anecdote:</Form.Label>
              <Form.Control
                type={anecdote.type}
                value={anecdote.value}
                onChange={anecdote.onChange}
              />
              <Button variant="primary" type="submit">create</Button>
            </Form.Group>
          </form>
        </div>
    )
}

export default AddForm