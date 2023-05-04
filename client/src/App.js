import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  const [user, setUser] = useState()
  const [role, setRole] = useState()
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/lognin' element={<Login />} />
        <Route exact path='/uploader' element={<VotesUploader />} />
      </Routes>
    </>
  );
}

export default App;
