import React from 'react'

const CoinSummary = ({coin}) => {
const price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(coin.price_usd)

    return (
        <div className='card z-depth-0 coin-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'> {coin.name} </span>
                <p className='grey-text'>{price} </p>
            </div>
        </div>
    )
}

export default CoinSummary