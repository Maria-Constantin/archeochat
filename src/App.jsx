import { useState } from 'react'
import ForumPage from './pages/Forum/ForumPage'
import Login from './pages/Authentication/Login/Login';
import Register from  './pages/Authentication/Register/Register';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
    </>
  )
}

export default App
