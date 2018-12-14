import React, { Component } from 'react'
import CoinList from '../coins/CoinList'

class Dashboard extends Component {
    state = {
        coins: []
    }

    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/?limit=5")
        .then(res => res.json())
        .then(res => this.setState(
          {  coins: [...res]}
        ))
    }

    render() {
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'> 
                        <CoinList coins={this.state.coins} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard