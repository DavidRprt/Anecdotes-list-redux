import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
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