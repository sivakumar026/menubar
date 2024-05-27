import React from 'react'
import Home from './components/Home'
import Authendicate from './components/Authendicate'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Authendicate />} />
      </Routes>
    </BrowserRouter>
     
  )
}

export default App