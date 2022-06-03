import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';

const ModalContainer = ({ closeModal, getAccounts }) => {
    
    const [account, setAccounts] = useState([]);
    const [myAccount, setMyAccount] = useState({
        accountName: '',
        accountType: '',
        startingAmount: ''
    });

    

    const handleChange = (e) => {
        // check for the name of the target
        const name = e.target.name;
        const value = e.target.value;
        setMyAccount({...myAccount, [name]:value});
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        if(myAccount.accountName && myAccount.accountType && myAccount.startingAmount) {
            const newAccount = {...myAccount, id: new Date().getTime().toString()};
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

    const handleCloseModal = () => {
        closeModal();
    }

    

    return(
        <section className='main-modal-container'>
            <div className="main-modal-card">
                <div className="modal-header">
                    <h3>ADD ACCOUNT</h3>
                    <FaTimes onClick={handleCloseModal}/>
                </div>

                <div className="modal-body">
                    <div className="form-section">
                        <form action="" name='myForm'>
                            <div className="form-group">
                                <label htmlFor="accountName">Name</label>
                            <input
                                type="text"
                                name="accountName"
                                id="accountName"
                                placeholder='Account name'
                                value={myAccount.accountName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountType">Account Type</label>
                            <input
                                type="text"
                                name="accountType"
                                id="accountType"
                                placeholder='Account type'
                                value={myAccount.accountType}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountType">Starting Amount</label>
                            <input
                                type="text"
                                name="startingAmount"
                                id="startingAmount"
                                placeholder='0'
                                value={myAccount.startingAmount}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button type='button' onClick={handleSubmission}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}


export default ModalContainer;
