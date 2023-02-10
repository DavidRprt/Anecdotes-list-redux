import { useEffect } from 'react'
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotesService'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])

  return (
    <div>
     <Filter />
     <AnecdoteList />
     <Notification />
     <AddForm />
    </div>
  )
}

export default App