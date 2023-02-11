import { useSelector } from 'react-redux'
import Anecdote from './Anecdote'

const AnecdoteList = () => {
    const filterString = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes)

    const filtered = anecdotes.filter(a =>a.content.includes(filterString))

    return(
        <div>
          <h2>Anecdotes</h2>
          {filtered.map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote}/>     
      )}
        </div>
    )

}

export default AnecdoteList