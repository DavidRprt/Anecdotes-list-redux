import { useEffect } from 'react'
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import SingleAnecdote from './components/SingleAnecdote'
import Notification from './components/Notification'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
    <div className="container">
      <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Anecdotes App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">anecdotes</Link>
              <Link className="nav-link" to="/create">create new</Link>
              <Link className="nav-link" to="/about">about</Link>
            </Nav>
        </Navbar.Collapse>
            
          </Container>
        </Navbar>
        
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
  </div>

  )
}

export default App