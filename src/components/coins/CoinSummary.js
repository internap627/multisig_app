import React from 'react'
import BuySellForm from './BuySellForm'

const CoinSummary = ({name, price_usd, quantity, value, handlePurchaseClick, isSelected, handleClick, deselectCoin, user}) => {
    const val = !value ? price_usd : value
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
    
    return (
        <div className='card z-depth-0 coin-summary' onClick={()=> handleClick && handleClick()}>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'> {name} </span>
                {
                    quantity !== undefined && <p className='grey-text'>{quantity} </p>
                }
                <span className='green-text'>{price} </span>
                {
                    handlePurchaseClick && <button onClick={handlePurchaseClick} className='grey-text'>BUY</button>
                }
                {
                    isSelected && <BuySellForm user={user} name={name} deselectCoin={deselectCoin}  />
                }
            </div>
        </div>
    )
}

export default CoinSummary