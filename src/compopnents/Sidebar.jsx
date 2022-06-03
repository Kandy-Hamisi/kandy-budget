import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sidebar-section'>
        <div className="sidebar-header">
            <div className="user-name">
                <h4>Hamisi Kandy</h4>
            </div>
            <div className="app-name">
                <h6>My Wallet</h6>
            </div>
        </div>
        <div className="sidebar-body">
            <ul className='sidebar-menu'>
                <li className='bordered'>Get Premium</li>
                <li>Bank Sync</li>
                <li className='bordered'>Imports</li>
                <li>Home</li>
                <li>Records</li>
                <li>Statistics</li>
                <li className="bordered">Planned Payments</li>
                <li>Budgets</li>
                <li>Debts</li>
                <li>Goals</li>
                <li>Shopping lists</li>
                <li>Warranties</li>
                <li>Loyalty Cards</li>
                <li>Currency Rates</li>
                <li>Group Sharing</li>
                <li>Others</li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar