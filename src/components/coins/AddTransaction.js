import React, { Component } from 'react'
import CoinList from './CoinList'



class AddTransaction extends Component {
    state = {
        coin: '',
        amount: '',
        searchTerm: '',
        selectedCoin: undefined
    }

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
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

    selectCoin = (selectedCoin) => {
        //setState selectedCoin
        this.setState({
            selectedCoin: {...selectedCoin}
        })
    }

    deselectCoin = () => {
        this.setState({
            selectedCoin: undefined
        })
    }

    filterCoins = (coins) => {
       return coins.filter(coin => coin.name.toLowerCase().includes (this.state.searchTerm.toLowerCase()) )
    }

  render() {
    
    const {coins, user} = this.props
    const filtered = this.filterCoins(coins)
    
    return (
        <div>
        <div className='container'>
                <form className='white'>
                    <h5 className='grey-text text-darken-3'>Search</h5>
                    <div className='input-field'>
                        <label htmlFor='text'>coin name</label>
                        <input type='text' id='search' value={this.state.searchTerm} onChange={this.handleSearchChange} />
                    </div>
                </form>
            </div>
        <CoinList selectedCoin={this.state.selectedCoin} selectCoin={this.selectCoin}
        deselectCoin={this.deselectCoin}
        coins={filtered} user={user} 
        />
        </div>
    )
  }
}

export default AddTransaction