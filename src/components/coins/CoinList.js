import React from 'react'
import CoinSummary from './CoinSummary'
import FirstScreen from './FirstScreen'
import AddTransaction from './AddTransaction'

const CoinList = ({coins, selectedCoin, selectCoin, deselectCoin, user, transactions, apiCoins}) => {
    let balance = 0
    coins && coins.forEach(coin => {
        balance += coin.value
    })
    
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balance)
    
    return (
        <div className="add-transaction">
        {
            coins ? coins.length < 1 && <AddTransaction coins={apiCoins} /> : null
        }
        <div className='coin-list section'>
        
        {balance > 0 && <div className='card z-depth-0 coin-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>Total Balance </span>
                
                <span className='green-text'>{price} </span>
                
            </div>
        </div>}
            {
                coins ? coins.map(coin => {
                    return <CoinSummary 
                    user={user}
                    handleClick={() => selectCoin && selectCoin(coin)}
                    deselectCoin={deselectCoin}
                    isSelected={selectedCoin ? coin.id === selectedCoin.id : false} 
                    key={coin.name} 
                    {...coin} 
                    transactions={transactions}
                    />
                }) : null
            }
        </div>
        </div>
    )
}

export default CoinList