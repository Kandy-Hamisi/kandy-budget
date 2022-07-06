import React, { useState, useContext } from 'react'
import { FaTimes } from  'react-icons/fa';
import { BudgetContext } from '../App';
import { v4 as uuidv4 } from 'uuid';

const AccountModal = () => {

    const [account, setAccounts] = useState([]);
    const [myAccount, setMyAccount] = useState({
        accountName: '',
        accountType: '',
        startingAmount: ''
    });

    const modalContext = useContext(BudgetContext);
    const closeModal = modalContext.closeModal;
    const getAccounts = modalContext.getAccounts;
    

    // handling input field change
    const handleChange = (e) => {
        // checking for the name of the target
        const name = e.target.name;
        const value = e.target.value;
        setMyAccount({...myAccount, [name]:value});
    }

    // handling submission
    const handleSubmission = (e) => {
        e.preventDefault();
        if(myAccount.accountName && myAccount.accountType && myAccount.startingAmount) {
            const newAccount = {...myAccount, id: uuidv4()};
            setAccounts([...account, newAccount]);
            getAccounts(newAccount);
            
            // console.log(newAccount);

            // TODO clear the form and exit modal
            setMyAccount({
                accountName: '',
                accountType: '',
                startingAmount: ''
            });

            // closing the modal
            closeModal();
        } else {
            alert("All the fields are required");
        }
    }


    // handling closing of modal
    const handleCloseModal = () => {
        closeModal();
    }
  return (
    <section className='main-modal-container'>
        <div className="main-modal-card">
            <div className="modal-header">
                <h3>ADD ACCOUNT</h3>
                <FaTimes onClick={handleCloseModal}  />
            </div>
            <div className="modal-body">
                <div className="form-section">
                    <form action="" name="myForm">
                        <div className="form-group">
                            <label htmlFor="accountName">Name</label>
                            <input
                                type="text"
                                name="accountName"
                                id="accountName"
                                placeholder='Account Name'
                                value={myAccount.accountName}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountType">AccountType</label>
                            <input
                                type="text"
                                name="accountType"
                                id="accountType"
                                placeholder='Account Type'
                                value={myAccount.accountType}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startingAmount">Starting Amoount</label>
                            <input
                                type="text"
                                name="startingAmount"
                                id="startingAmount"
                                placeholder='Starting Amount'
                                value={myAccount.startingAmount}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <button type='button' onClick={handleSubmission}>
                                Save
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default AccountModal