import React from 'react'
import { NavLink } from 'react-router-dom'
import firebase from '../../config/fbConfig'

const SignedInLinks = ({ initials }) => {
    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <ul className='right'>
            <li><NavLink to='/news'>News</NavLink> </li>
            <li><NavLink to='/addtransaction'>Search</NavLink> </li>
            <li><NavLink to='/' onClick={logout}>Log Out</NavLink> </li>
            <li><NavLink to='/' className='btn btn-floating indigo lighten-4'><div className="initials">{initials}</div></NavLink> </li>
        </ul>
    )
}

export default SignedInLinks