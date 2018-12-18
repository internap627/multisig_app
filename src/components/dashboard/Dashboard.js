import React, { Component } from 'react'
import CoinList from '../coins/CoinList'
import Notifications from './Notifications'
import {db} from '../../config/fbConfig'

class Dashboard extends Component {
    state = {
        apiCoins: [],
        coins: null,
        wallet: [],
        user: {}
    }
    

    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
        .then(res => res.json())
        .then(res => this.setState(
          {  apiCoins: [...res]}
        ))
        db.collection('coins').get().then((snapshot) => {
            const coins = {}
            
            snapshot.docs.forEach(item => {
                const getItemData = item.data();
                if (getItemData.user === this.props.user.email) {
                    !coins[getItemData.coin] && (coins[getItemData.coin] = 0);
                    coins[getItemData.coin] += getItemData.amount
                }
            })
            
            this.setState({coins})
        })
        
    }

    render() {
       
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'> 
                        {
                            this.state.coins && <CoinList coins={this.state.coins} />
                        }
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard