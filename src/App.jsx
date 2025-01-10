import React from 'react';
import ForumPage from './pages/Forum/ForumPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ForumPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
