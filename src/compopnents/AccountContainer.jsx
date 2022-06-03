import React, { useReducer, useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import ModalContainer from './ModalContainer';
import { reducer } from '../reducer';

const defaultState = {
    isModalOpen: false
}

const AccountContainer = () => {

    const LOCAL_STORAGE_KEY = "mybanks";
    // const [accountModal, setAccountModal] = useState(false);
    const [modalState, dispatch] = useReducer(reducer, defaultState);
    const [myAccounts, setMyAccounts] = useState([]);

    // trying to store the bank details in the local storage
    

    const getAccounts = (accountArray) => {
        setMyAccounts([...myAccounts, accountArray]);
    }

    const handleAccountDisplay = () => {
        
        dispatch({ type: 'OPEN_MODAL' });
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    // useEffect hook to retrieve bank accounts from the local storage
    useEffect(() => {
        const retrieveBanks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  
        if(retrieveBanks) setMyAccounts(retrieveBanks);
      }, []);
  
      // useEffect hook to store the bank accounts into the local storage
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myAccounts));
        console.log(myAccounts);
        
      }, [myAccounts]);


  return (
    <section className="account-section">
        <div className="account-container">
            {
                myAccounts.map(bankAccount => {
                    return (
                        <article key={bankAccount.id} className="account">
                            <div className="logo"></div>
                            <h5>{bankAccount.accountName}</h5>
                            <h6>KES {bankAccount.startingAmount}</h6>
                        </article>
                    )
                })
            }
            <div className="card-add">
                <button onClick={handleAccountDisplay}><FaPlus/> Add Account</button>
            </div>
            {modalState.isModalOpen && <ModalContainer closeModal={closeModal} getAccounts={getAccounts}/>}
        </div>
    </section>
  )
}

export default AccountContainer