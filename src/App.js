import { useEffect } from 'react'
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
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