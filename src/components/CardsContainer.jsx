import React from 'react'
import CardComponent from './CardComponent'

const CardsContainer = (props) => {
  const {id, startingAmount, accountName} = props;
  return (
    <section className="card-container-section">
      <h1>Hello React</h1>
      <h3>{startingAmount}</h3>
        <CardComponent amount={startingAmount} />
    </section>
  )
}

export default CardsContainer