import React from 'react'
import BuySellForm from './BuySellForm'
import Notifications from '../dashboard/Notifications'

const CoinSummary = ({name, price_usd, quantity, value, handlePurchaseClick, isSelected, handleClick, deselectCoin, user, transactions}) => {
    const val = !value ? price_usd : value
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
    const icon = quantity? 'receipt' : 'add'
    
    return (
        <div className='card coin-summary hoverable' >
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
                
                <div className='sum-button'>
                <button onClick={()=> {
                    handleClick && handleClick()
                    // transactions && window.M.Modal.init(document.getElementById('modal1')).open()
                    }} className="btn-floating right btn waves-effect waves-light teal scale-transition modal-trigger"><i className="material-icons">{icon}</i>
                    </button>
                </div>
              
                {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1"></a> */}

           
                <div id="modal1" className="modal bottom-sheet">
                <div className="modal-content">
                <Notifications coins={transactions} />
                </div>
                <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
  </div>

            </div>
        </div>
    )
}

export default CoinSummary

// handleClick && handleClick()

// {window.M.Modal.init(document.getElementById('modal1'))}