import React from 'react'
import CoinSummary from './CoinSummary'

const CoinList = ({coins, selectedCoin, selectCoin, deselectCoin, user}) => {
    let balance = 0
    coins.forEach(coin => {
        balance += coin.value
    })
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balance)
    
    return (
        <div className='coin-list section'>
        {balance && <div className='card z-depth-0 coin-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>Total Balance </span>
                
                <span className='grey-text'>{price} </span>
                
            </div>
        </div>}
            {
                coins.map(coin => {
                    return <CoinSummary 
                    user={user}
                    handleClick={() => selectCoin && selectCoin(coin)}
                    deselectCoin={deselectCoin}
                    isSelected={selectedCoin ? coin.id === selectedCoin.id : false} 
                    key={coin.name} 
                    {...coin} 
                    />
                })
            }
        </div>
    )
}

export default CoinList