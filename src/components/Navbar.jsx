import React, { useState} from 'react'


const Navbar = () => {

    const [showModal, setShowModal] = useState(false);

    const handleModalDisplay = () => {
        if(!showModal) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

  return (
    <header className='header-section'>
        <div className="left-container">
            <div className="header-logo">
                <h1>Presupuesto</h1>
            </div>
            {/* bank navigation */}
            <nav className='navigation'>
                <ul className="menu-nav">
                    <li className="menu-nav-item">Accounts</li>
                    <li className="menu-nav-item">Records</li>
                    <li className="menu-nav-item">Analytics</li>
                    <li className="menu-nav-item">Imports</li>
                    <li className="menu-nav-item">Wallet Life</li>
                </ul>
            </nav>
        </div>
        <div className="right-container">
            <div className="add-record">
                <button type="button">Record</button>
            </div>
            <div className="account-info">
                <h5 className='user-name' onClick={handleModalDisplay}>Hamisi Kandy</h5>
            </div>
        </div>
        {
            showModal && <div className="account-modal">
            <div className="modal-card">
                <ul className="card-menu">
                    <li className='active'>Add Voucher</li>
                    <li>Upgrade</li>
                    <li>Settings</li>
                    <li>Log out</li>
                </ul>
            </div>
        </div>
        }
    </header>
  )
}

export default Navbar