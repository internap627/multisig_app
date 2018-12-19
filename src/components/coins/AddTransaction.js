import React, { Component } from 'react'
import CoinList from './CoinList'



class AddTransaction extends Component {
    state = {
        coin: '',
        amount: '',

        selectedCoin: undefined
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
    }

  render() {
    const {coins} = this.props
    return (
        <CoinList coins={coins} />
    )
  }
}

export default AddTransaction