import React from 'react'

const Transactions = ({coin}) => {
    console.log(coin)
    return (
        <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>{coin.name}</div>
        <div className="collapsible-header"><span>Transaction ID: {coin.id}</span></div>
        <div className="collapsible-header"><span> Amount: {coin.amount}</span></div>
      </li>
    )
}

export default Transactions