import React from 'react'
// import { BudgetContext } from '../App'
import CashFlow from './cards/CashFlow'

const CardComponent = () => {

  // const myBudgetContext = useContext(BudgetContext);
  // const savedRecords = myBudgetContext.savedRecords;
  // console.log(savedRecords);

  return (
    <article className='account-card'>
        <div className="account-card-header">
            <h4>Cash Flow</h4>
        </div>
        <hr />
        <div className="account-card-body">
            <CashFlow income={500}/>
        </div>
    </article>
  )
}

export default CardComponent