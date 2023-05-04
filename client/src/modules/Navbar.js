import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

function Navbar(){

    return (
        <>
        <Nav.Link as ={Link} to = '/'>Home</Nav.Link>
        <Nav.Link as ={Link} to = '/signup'>Signup</Nav.Link>
        <Nav.Link as ={Link} to = '/login'>Login</Nav.Link>
        <Nav.Link as ={Link} to = '/votesUploader'>Votes Capture</Nav.Link>
        </>
    )
}
export default Navbar;