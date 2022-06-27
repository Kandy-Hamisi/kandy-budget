import React from 'react'
import CashFlow from './cards/CashFlow'

const CardComponent = ({amount}) => {
  return (
    <article className='account-card'>
        <div className="account-card-header">
            <h4>Cash Flow</h4>
        </div>
        <hr />
        <div className="account-card-body">
            <CashFlow income={amount}/>
        </div>
    </article>
  )
}

export default CardComponent