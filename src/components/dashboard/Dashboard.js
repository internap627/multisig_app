import React, { Component } from 'react'
import CoinList from '../coins/CoinList'
import Notifications from './Notifications'
import {db} from '../../config/fbConfig'


class Dashboard extends Component {

    state = {
        coins: null,
        transactions: null,
        wallet: [],
        user: {},
        selectedCoin: undefined
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

    selectCoin = (selectedCoin) => {
        this.setState({
            selectedCoin: {...selectedCoin}
        })
        db.collection('coins').get().then((snapshot) => {
            const transactions = []
            snapshot.docs.forEach(item => {
                const getItemData = item.data();
                
                if (getItemData.user === this.props.user.email && getItemData.coin === this.state.selectedCoin.name ) {
                    const transaction = {
                        name: getItemData.coin,
                        amount: getItemData.amount,
                        id: item.id
                    }
                    transactions.push(transaction)
                }
            })
            this.setState({transactions}, () => window.M.Modal.init(document.getElementById('modal1')).open() )

        })
       
        

    }

    render() {
       
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'> 
                       
                        {
                            this.state.coins && <CoinList coins={this.getDashboardCoinList()} selectCoin={this.selectCoin} transactions={this.state.selectedCoin && this.state.transactions } />
                        }
                    </div>
                    {/* <div className='col s12 m5 offset-m1'>
                        <Notifications coins={this.state.selectedCoin && this.state.transactions }  />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard
