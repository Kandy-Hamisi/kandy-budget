import React from 'react'
import Navbar from './compopnents/Navbar'
import './App.css'
// import Sidebar from './compopnents/Sidebar'
import AccountContainer from './compopnents/AccountContainer'
import CardsContainer from './compopnents/CardsContainer'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Sidebar /> */}
      <main className='main-section'>
        <AccountContainer />
        <CardsContainer />
      </main>
    </React.Fragment>
  )
}

export default App