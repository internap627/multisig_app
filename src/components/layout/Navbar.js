import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = ({user}) => {
    const initials = user && user.email[0].toUpperCase()
    return (
        <div className='navbar-fixed'>
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className="brand-logo left">Multisig</Link>
                {user? <SignedInLinks initials={initials}/> :
                <SignedOutLinks/>}
            </div>
        </nav>
        </div>
    )
}

export default Navbar