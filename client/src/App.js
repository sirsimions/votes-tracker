import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './modules/Home';
import Signup from './modules/Signup';
import Login from './modules/Login';
import VotesUploader from './modules/VotesUploader';
import Navbar from './modules/Navbar';

function App() {
  const [user, setUser] = useState()
  const [role, setRole] = useState()
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/uploader' element={<VotesUploader />} />
      </Routes>
    </>
  );
}

export default App;
