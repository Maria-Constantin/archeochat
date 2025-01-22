import React from 'react';
import ForumPage from './pages/Forum/ForumPage';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router';
import Quizzes from './pages/Quizzes/Quizzes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ForumPage/>} />
          {/* <Route path='/Trending' element={<Quizzes/>} />
          <Route path='/Bookmarks' element={<Quizzes/>} /> */}
          <Route path='/Games' element={<Quizzes/>} />
          {/* <Route path='/Polls' element={<Quizzes/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
