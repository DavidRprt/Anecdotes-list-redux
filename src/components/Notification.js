import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const Notification = () => {
  const message = useSelector(state => state.message)

  const [show, setShow] = useState(false)
  useEffect(() => {
    if (message !== ''){
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000)
    }
  }, [message])

  return (
    <div className="container">
      {show !== false && <Alert variant="success"> {message} </Alert>}
    </div>
 
  )
}

export default Notification