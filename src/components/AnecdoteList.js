import { useSelector } from 'react-redux'
import Anecdote from './Anecdote'
import { Table } from 'react-bootstrap'

const AnecdoteList = () => {
    const filterString = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes)

    const filtered = anecdotes.filter(a =>a.content.includes(filterString))

    return(
        <div>
          <h2>Anecdotes</h2>
          <Table striped>
            <tbody>
                {filtered.map(anecdote =>
                <tr key={anecdote.id}>
                    <td>   
                     <Anecdote key={anecdote.id} anecdote={anecdote}/>
                    </td>
                </tr>)}
            </tbody>
         </Table>
        </div>
    )

}

export default AnecdoteList