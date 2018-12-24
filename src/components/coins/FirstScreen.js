import React from 'react'
import { Link } from 'react-router-dom'


const FirstScreen = () => {

    return (
        <div className='container card z-depth-0 center'>
            <div className='card-content grey-text text-darken-3'>
            <h5 className='center'>Welcome, click to get started</h5>
            <Link to='/addtransaction' className="btn-floating pulse teal center"><i className='material-icons'>attach_money</i></Link>
            </div>
        </div>
    )

}

export default FirstScreen