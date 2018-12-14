import React from 'react'
import CoinSummary from './CoinSummary'

const CoinList = ({coins}) => {
    return (
        <div className='coin-list section'>
            {coins.map(coin => {
                return <CoinSummary coin={coin}/>
            })}
        </div>
    )
}

export default CoinList