import React, { Component } from 'react'
import CoinList from '../coins/CoinList'
import Notifications from './Notifications'
import {db} from '../../config/fbConfig'

class Dashboard extends Component {

    state = {
        coins: null,
        wallet: [],
        user: {}
    }
    
    getApiCoins = () => {
        return this.props.apiCoins
    }

    componentDidMount() {
        // fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
        // .then(res => res.json())
        // .then(res => this.setState(
        //   {  apiCoins: [...res]}
        // ))
        db.collection('coins').get().then((snapshot) => {
            const coins = []
            
            snapshot.docs.forEach(item => {
                const getItemData = item.data();
                if (getItemData.user === this.props.user.email) {
                    const coin = coins.find(c => c.name === getItemData.coin) || {
                        name: getItemData.coin,
                        quantity: 0
                    };
                    coin.quantity += getItemData.amount;
                    
                    if (!coins.includes(coin)) coins.push(coin);
                }
            })
            
            this.setState({coins})
            console.log(this.state.coins)
        })
        
    }

    getDashboardCoinList = () => this.state.coins.map(coin => {
        const apiCoin = this.getApiCoins().find(c => c.name === coin.name);
        const usdPrice = parseFloat(apiCoin.price_usd)
        return {
            ...coin,
            value: coin.quantity * usdPrice
        }
    })

    getAPICoinList = () => this.getApiCoins().map(coin => {
        const usdPrice = parseFloat(coin.price_usd)
        return {
            ...coin,
            value: parseFloat(coin.price_usd),
            handlePurchaseClick: () => {}
        }
    })

    render() {
       
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'> 
                        {/* {
                            this.state.apiCoins && <CoinList coins={this.getAPICoinList()} />
                        } */}
                        {
                            this.state.coins && <CoinList coins={this.getDashboardCoinList()} />
                        }
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
