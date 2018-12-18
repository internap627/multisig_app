import React, { Component } from 'react'

class AddTransaction extends Component {
    state = {
        coin: '',
        amount: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

  render() {
    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
            <h5 className='grey-text text-darken-3'>Add Transaction</h5>
            <div className='input-field'>
                <label htmlFor='text'>Coin</label>
                <input type='text' id='coin' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
                <label htmlFor='number'>Amount</label>
                <input type='number' id='amount' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
                <button className='btn pink lighten-1 z-depth-0'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default AddTransaction