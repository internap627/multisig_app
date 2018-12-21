import React from 'react'
import Transactions from './Transactions'

const Notifications = ({ coins }) => {
  console.log(coins)
  return (
    <div>
      <ul className="collapsible">
        {
          coins && coins.map((coin, idx) => {
            return <Transactions key={idx} coin={coin} />
          })
        }
      </ul>
      
    </div>
  )
}

export default Notifications