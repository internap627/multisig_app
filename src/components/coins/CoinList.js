import React from 'react'
import CoinSummary from './CoinSummary'

const CoinList = ({coins}) => {
    return (
        <div className='coin-list section'>
            {
                Object.keys(coins).map(coin => {
                    return <CoinSummary key={coin} coinName={coin} coinValue={coins[coin]}/>
                })
            }
        </div>
    )
}

export default CoinList