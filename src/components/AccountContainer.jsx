import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa';
import { BudgetContext } from '../App';
import AccountModal from './AccountModal';



const AccountContainer = () => {

    // const { handleAccountDisplay, modalState } = props;
    // console.log(modalState);
    


    const accountObjects = useContext(BudgetContext);
    const modalDisplay = accountObjects.modalState;
    const addedAccounts = accountObjects.addedAccounts;
    console.log(modalDisplay);

    
    // handle account display
    // const handleAccountDisplay = () => {
    //     dispatch({type: 'OPEN_MODAL'});
    // }
  return (
    <section className='account-section'>
        <div className="account-container">
            {/* adding added accounts */}
            {
                addedAccounts.map(bankAccount => {
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
                <button onClick={accountObjects.handleAccountDisplay}><FaPlus /> Add Account</button>
            </div>
            {
                modalDisplay.isModalOpen && <AccountModal/>
            }
        </div>
        
    </section>
  )
}

export default AccountContainer