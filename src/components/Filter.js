import { useDispatch } from 'react-redux'
import  { filterAnecdotes } from '../reducers/filterReducer'



const Filter = () => {
    const dispatch = useDispatch()

    const handleFilter = (event) => {
        const filterString = event.target.value
        dispatch(filterAnecdotes(filterString))
    }
    return(
        <div> Filter:
          <input name='filter' onChange={handleFilter}></input>
        </div>
    )

}

export default Filter