import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup( {user, onSignup} ){

    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [mobno, setmobno]=useState('')
    const [role, setRole]=useState('')
    const [password, setPassword]=useState('')
    const[passwordConfirmation, setPasswordConfirmation]=useState('')
    const [isLoading, setIsLoading] = useState(false)
    

    function handleRole(e){
        setRole(e.target.value)
       
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        fetch("/signup",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                 firstname: firstname,
                 lastname: lastname,
                 password: password,
                 mobno: mobno,
                 role: role,
                 password_confirmation: passwordConfirmation,
                }),
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            onSignup()
            setIsLoading(false)
        })
        window.alert('Account created successfully')
    }
    return (
        <>
        <div class="container">
                <div class="row justify-content-center" id='frame' >
                    <div class="col-md-5">
                        <div class="card">
                            <h2 class="card-title text-center">Signup <a href="http://opensnippets.com"></a></h2>
                            <div class="card-body py-md-4"id='form'>
                                <form _lpchecked="1" className='form' onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" class="form-control" id="name" placeholder="First Name" />
                                    </div>
                                    <div class="form-group">
                                        <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" class="form-control" id="name2" placeholder="Last Name" />
                                    </div>
                                    <div class="form-group">
                                    <div class="form-group">
                                        <input value={mobno} onChange={(e)=>setmobno(e.target.value)} type="number" class="form-control"  placeholder="Mobile number" />
                                    </div>
                                    <div class="form-group">
                                        <input value={role} onChange={(e)=>setRole(e.target.value)} type="text" class="form-control"  placeholder="Role" />
                                    </div>
                                    {/* <label class="form-group">
                                        Signup as
                                        <select onChange={handleRole}  className='form-select' >
                                        
                                         <option value='agent'>agent</option>
                                         <option value='user'>user</option>
                                        </select>
                                    </label> */}
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <input value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} type="password" class="form-control" placeholder="Confirm your password" />
                                    </div>
                                    
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                        <small>Already registered?</small>
                                        <a href='/logins'>Login</a>
                                    </div>
                                    <button class="btn btn-primary" disabled={isLoading}>Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;