import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './modules/Home';
import Signup from './modules/Signup';
import Login from './modules/Login';
import VotesUploader from './modules/VotesUploader';
import Navbar from './modules/Navbar';
import { useNavigate } from 'react-router-dom';
import ControlPanel from './modules/ControlPanel';

function App() {
  const [user, setUser] = useState()
  const [role, setRole] = useState()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  function onLogin(){
    navigate('/')
  }
  function onSignup(){
    navigate('/login')
  }
  
  

  useEffect(()=>{
    fetch('/vot',{
      method: 'GET',
      headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
    .then(data=>{
      // const array = Object.entries(data).map(([name, obj]) => ({ name, ...obj }))
      console.log(data)
      setData(data)
    })
    
  },[])
  return (
    <>
      <Navbar user= {user} role = {role}/>
      <Routes>
        <Route exact path='/' element={<Home data= {data} user= {user} />} />
        <Route exact path='/controlpanel' element={<ControlPanel data= {data} user= {user} />} />
        <Route exact path='/signup' element={<Signup onSignup={onSignup} user= {user} />} />
        <Route exact path='/login' element={<Login  onLogin={onLogin} user= {user} setUser= {setUser} setRole = {setRole}/>} />
        <Route exact path='/uploader' element={<VotesUploader user= {user} />} />
      </Routes>
    </>
  );
}

export default App;
