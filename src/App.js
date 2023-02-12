import { useEffect } from 'react'
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import SingleAnecdote from './components/SingleAnecdote'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <Router>
    <div>
      <Link to="/">anecdotes</Link>
      <Link to="/create">create new</Link>
      <Link to="/about">about</Link>
    </div>
    <Routes>
      <Route path="/anecdotes/:id" element={<SingleAnecdote />} />
      <Route path="/" element={<div><Filter /> <AnecdoteList /></div>} />
      <Route path="/create" element={<AddForm />} />
      <Route path="/about" element={<div></div>} />
    </Routes>

    <div>
      <Notification />
      <i>Anecdote app. <a href="https://github.com/DavidRprt" target="_blank" rel="noreferrer noopener">GitHub</a></i>
    </div>
  </Router>

 /*    <div>
     <Filter />
     <AnecdoteList />
   
     
    </div> */
  )
}

export default App