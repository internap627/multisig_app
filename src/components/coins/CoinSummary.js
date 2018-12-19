import React from 'react'

const CoinSummary = ({name, price_usd, quantity, value, handlePurchaseClick, select}) => {
    const val = !value ? price_usd : value
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
    
    return (
        <div className='card z-depth-0 coin-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'> {name} </span>
                {
                    quantity !== undefined && <p className='grey-text'>{quantity} </p>
                }
                <p className='grey-text'>{price} </p>
                {
                    handlePurchaseClick && <button onClick={handlePurchaseClick} className='grey-text'>BUY</button>
                }
                {
                    // selectedCoin && <BuySellForm />
                }
            </div>
        </div>
    )
}

export default CoinSummary