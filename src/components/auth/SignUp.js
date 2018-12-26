import React, { Component } from 'react'
import { withRouter } from "react-router";
import firebase from '../../config/fbConfig'

class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {
            console.log(u)
            this.props.history.push('/')
        })
        .catch((err) => {console.log(err.message)})
    }

  render() {
    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
            <h5 className='grey-text text-darken-3'>Sign Up</h5>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
                <button className='btn teal z-depth-0'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp)
