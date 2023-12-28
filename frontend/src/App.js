import React from 'react'
import {BrowserRouter,  Routes, Route } from "react-router-dom";
import UserDetails from './pages/userdetails';
import Register from './pages/Register';
import Login from './pages/Login';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='userdetails' element={<UserDetails />} />
            <Route path="register" element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App