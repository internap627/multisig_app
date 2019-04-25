import React, { Component } from 'react'
import { withRouter } from "react-router";
import firebase from '../../config/fbConfig'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        user: {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    

    handleSubmit = (e) => {
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {
                console.log(u)
                this.props.history.push('/')
            })
            .catch(err => {
                alert("Invalid email/password.")
                this.setState({email: '', password: ''})
            })
    }



    render() {
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn indigo darken-4 z-depth-0'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignIn)
