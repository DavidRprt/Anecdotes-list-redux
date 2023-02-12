import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

const Notification = () => {
  const message = useSelector(state => state.message)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

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
    <div>
      {show !== false && <div style={style}> {message} </div>}
    </div>
 
  )
}

export default Notification