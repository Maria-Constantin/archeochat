import { useState } from 'react'
import ForumPage from './pages/Forum/ForumPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ForumPage />
    </>
  )
}

export default App
