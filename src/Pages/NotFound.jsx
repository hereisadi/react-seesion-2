import { useEffect } from 'react'
import './NotFound.css'

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found"
  })
  
  return (
    <div className="mydiv"  >NotFound</div>
  )
}

export default NotFound