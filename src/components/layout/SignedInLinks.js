import React from 'react'
import { NavLink } from 'react-router-dom'
import firebase from '../../config/fbConfig'

const SignedInLinks = ({ initials }) => {
    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <ul className='right'>
            <li><NavLink to='/addtransaction'>Add Transaction</NavLink> </li>
            <li><NavLink to='/' onClick={logout}>Log Out</NavLink> </li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{initials}</NavLink> </li>
        </ul>
    )
}

export default SignedInLinks