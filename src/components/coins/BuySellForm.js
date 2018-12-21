import React, {Component} from 'react'
import { db } from '../../config/fbConfig'

class BuySellForm extends Component {
    state = {
        buy: 0,
        sell: 0
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    

    handleSubmit = (e) => {
        e.preventDefault()
        let i = this.state[e.target.name]
        let num = e.target.name === 'sell' ? i - (i*2) : i * 1
        let doc = {
            user: this.props.user.email,
            coin: this.props.name,
            amount: num
        }
        db.collection('coins').add(doc)
        .then(doc => {
            window.M.toast({html: `Transaction ID: ${doc.id}`})
            this.props.deselectCoin()
        })
        
        
    }



    render() {
        
        return (
            <div className='container'>
                <form className='white' name='buy' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Add Transaction</h5>
                    <div className='input-field'>
                        <label htmlFor='number'>Buy</label>
                        <input type='number' step='0.01' id='buy'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Submit</button>
                    </div>
                </form>
                <form className='white' name='sell' onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='number'>Sell</label>
                        <input type='number' step='0.01' id='sell'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BuySellForm