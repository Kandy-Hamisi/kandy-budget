import React, { useContext } from 'react'
import CardComponent from './CardComponent'
import { BudgetContext } from '../App'

const CardsContainer = () => {
  const accountsData = useContext(BudgetContext);
  // const addedAccounts = accountsData.addedAccounts;
  const savedRecords = accountsData.savedRecords;
  console.log(savedRecords);
  return (
    <section className="card-container-section">
      <h1>Hello React</h1>
      <h3>500</h3>
        <CardComponent />
    </section>
  )
}

export default CardsContainer