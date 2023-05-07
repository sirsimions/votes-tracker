import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import '../App.css'

function Navbar( {user, role} ) {

    if(user && role ==='secret'){
        return (
            <>
                <div className='navhd' >
                    {/* <div className='navItm'><Nav.Link as={Link} to='/' >Home</Nav.Link></div>
                    <div className='navItm'><Nav.Link as={Link} to='/signup' >Signup</Nav.Link></div> */}
                    {/* <div className='navItm'><Nav.Link as={Link} to='/login' >Login</Nav.Link></div> */}
                    <div className='navItm'><Nav.Link as={Link} to='/' >Home</Nav.Link></div>
                    <div className='navItm'><Nav.Link as={Link} to='/uploader' >Votes Capture</Nav.Link></div>
                    <p className='welcome'>Hi {user.firstname}, welcome!</p>
                </div>
            </>
        );
    }

    else if(user) {
        return (
            <>
                <div className='navhd' >
                    <div className='navItm'><Nav.Link as={Link} to='/' >Home</Nav.Link></div>
                    <p className='welcome'>Hi {user.firstname}, welcome!</p>
                    {/* <div className='navItm'><Nav.Link as={Link} to='/uploader' >Votes Capture</Nav.Link></div> */}
                </div>
            </>
        );
    }

    else {
        return (
            <>
                <div className='navhd' >
                    <div className='navItm'><Nav.Link as={Link} to='/' >Home</Nav.Link></div>
                    <div className='navItm'><Nav.Link as={Link} to='/signup' >Signup</Nav.Link></div>
                    <div className='navItm'><Nav.Link as={Link} to='/login' >Login</Nav.Link></div>
                    {/* <div className='navItm'><Nav.Link as={Link} to='/uploader' >Votes Capture</Nav.Link></div> */}
                </div>
            </>
        );
    }





    // return (
    //     <>
    //         <div className='navhd' >
    //             <div className='navItm'><Nav.Link as={Link} to='/' >Home</Nav.Link></div>
    //             <div className='navItm'><Nav.Link as={Link} to='/signup' >Signup</Nav.Link></div>
    //             <div className='navItm'><Nav.Link as={Link} to='/login' >Login</Nav.Link></div>
    //             <div className='navItm'><Nav.Link as={Link} to='/uploader' >Votes Capture</Nav.Link></div>
    //         </div>
    //     </>
    // );
}
export default Navbar;